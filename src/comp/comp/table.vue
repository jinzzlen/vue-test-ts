<template>
    <div>
       
        <table class = "j-table-box" cellspacing="0" cellpadding="0">
            <table-header :titleMap = "state.titleMap"></table-header>
            <table-body :data = "state.tableRows" :titleMap = "state.titleMap"></table-body>
        </table>
        <table-page :page = "state.tableInfo"></table-page>
    </div>
</template>
<script lang="ts">
var _publishurl:string = "http://10.112.7.77:3000"
import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
import  tableHeader from "./tableHeader.vue";
import  tableBody from "./tableBody.vue";
import  tablePage from "./tablePage.vue";
import Fetch from "../tool/fetch";
/**
 * tableoptions interface
 */
interface tableOpt {
    getUrl:Function;
    pageOption:{
        indexKey:string;
        index:number;
        pageSizeKey:string;
        pageSize:number;
    };
    dataHandle:Function,
    titleMap:number[],

}
/**
 * tableArr interface
 */
interface tableArr {
    data:number[],
    total:number,
    index:number
    totalPage:number,
}
function settableData(data:tableArr,that: any):void{
    that.state.tableRows = data.data;
    that.state.tableInfo.total = data.total;
    that.state.tableInfo.totalPage = data.totalPage;
    that.state.tableInfo.index = data.index;
}
@Component({
   components:{
        tableHeader,
        tableBody,
        tablePage
   },
  
})

export default class jTable extends Vue{
    @Prop() tableOpt !:tableOpt;
     state = {
        tableInfo : {
            pageSize:this.tableOpt.pageOption.pageSize,
            index:this.tableOpt.pageOption.index,
            total:0,
            totalPage:0,
        },
        tableRows : [],
        titleMap:this.tableOpt.titleMap,
    }
    
   mounted(){
       this.renderTable();
   }
   renderTable(index?:number){
       if(!index){
           index = this.state.tableInfo.index
       }
        if(this.tableOpt.getUrl()){
          Fetch.getFetch(_publishurl + this.tableOpt.getUrl(),{
                [this.tableOpt.pageOption.indexKey]:index,
                [this.tableOpt.pageOption.pageSizeKey]:this.state.tableInfo.pageSize
          }).then((data:any) => {
                let array = this.tableOpt.dataHandle(data);
                settableData(array,this);
                console.log(this,111);
            })
            .catch(error => {
                console.log(error,2222);
            })
       }
    }
    
   
}
</script>
<style lang="scss">
    .j-table-box{
        width:100%;
    }
    
    
</style>