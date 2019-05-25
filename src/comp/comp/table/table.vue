<template>
    <div>
       {{this.$data.__key}}
        <table class = "j-table-box" cellspacing="0" cellpadding="0">
            <table-header :titleMap = "state.titleMap"></table-header>
            <table-body :data = "state.tableRows" :titleMap = "state.titleMap"></table-body>
        </table>
        <table-page :page = "state.tableInfo" :pkey = "$data.__key"></table-page>
    </div>
</template>
<script lang="ts">
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


import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
import  tableHeader from "./tableHeader.vue";
import  tableBody from "./tableBody.vue";
import  tablePage from "./tablePage.vue";
import Fetch from "../../tool/fetch";
import Key from "../../tool/compConfig"

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
    __key :number = Key.getKey();
    
   mounted(){
       var _this = this;
       this.$_event.$on(this.$data.__key+"TABLEEVENT",function(tag:any,...other:any[]):void{
           if(!tag){
               return ;
           }
           if(tag == "prePage"){
               _this.renderTable(other[0]);
           }
           if(tag == "nextPage"){
               _this.renderTable(other[0]);               
           }
           if(tag == "appointPage"){
               _this.renderTable(other[0]);
           }
       })
       this.renderTable();
   }
   beforeDestroy(){
       this.$_event.$off("TABLEEVENT")
   }
   /**
    * @params {number} index 获取的页码
    */
   renderTable(index?:number):void{
       if(!index){
           index = this.state.tableInfo.index
       }
        if(this.tableOpt.getUrl()){
        
          Fetch.getFetch(this.tableOpt.getUrl(),{
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
    /**
     * @description 获取当前页数
     */
    getCurrentPage(){
        return this.state.tableInfo.index
    }
    /**
     * 获取当前页数据
     */
    getCurrentPageData(){
        return this.state.tableRows
    }
    
   
}
</script>
<style lang="scss">
    .j-table-box{
        width:100%;
    }
    
    
</style>