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
import { Vue, Component,Prop } from 'vue-property-decorator';
import  tableHeader from "./tableHeader.vue";
import  tableBody from "./tableBody.vue";
import  tablePage from "./tablePage.vue";
interface tableOpt {
    getUrl:Function;
    pageOption:{
        indexKey:string;
        index:number;
        totalKey:string;
        total:number;
    };
}
@Component({
   components:{
        tableHeader,
        tableBody,
        tablePage
   },
  
})

export default class jTable extends Vue{
    @Prop() tableOpt !:tableOpt
   created(){
       if(this.tableOpt.getUrl()){
          fetch(_publishurl + this.tableOpt.getUrl() + `?${this.tableOpt.pageOption.indexKey}=${this.tableOpt.pageOption.index}&${this.tableOpt.pageOption.totalKey}=${this.tableOpt.pageOption.total}`)
            .then(function(response){
                console.log(response);
                return response.json();
            }).then(function(data){
                console.log(data);
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