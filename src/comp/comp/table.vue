<template>
    <div>
       
        <table class = "j-table-box" cellspacing="0" cellpadding="0">
            <table-header></table-header>
            <table-body></table-body>
        </table>
        <table-page></table-page>
    </div>
</template>
<script lang="ts">
var _publishurl:string = "http://10.112.7.77:3000"
import { Vue, Component,Prop, Provide,} from 'vue-property-decorator';
import  tableHeader from "./tableHeader.vue";
import  tableBody from "./tableBody.vue";
import  tablePage from "./tablePage.vue";
interface tableOpt {
    getUrl:Function;
    pageOption:{
        indexKey:string;
        index:number;
        pageSizeKey:string;
        pageSize:number;
    };
    dataHandle:Function
}
interface tableArr {
    data:Array<number>,
    total:number,
    index:number
}
function tableRender(data:tableArr,that: any):void{
    console.log(data)
    that.tableRows = data.data;
    
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
            count:0,
            totalPage:0,
        }
    }
    dd:number = 11
   mounted(){
       if(this.tableOpt.getUrl()){
           
          fetch(_publishurl + this.tableOpt.getUrl() + `?${this.tableOpt.pageOption.indexKey}=${this.state.tableInfo.index}&${this.tableOpt.pageOption.pageSizeKey}=${this.state.tableInfo.pageSize}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                let array = this.tableOpt.dataHandle(data);
                tableRender(array,this);
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