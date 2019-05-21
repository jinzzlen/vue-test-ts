<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="1111"/>
    <j-table  :ccc = "obj" :tableOpt = "tableOpt"></j-table>
   
  </div> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import jTable from '../comp/comp/table.vue';//table
@Component({
  components: {
    HelloWorld,
    jTable
  },
})
export default class Home extends Vue {
  msg:string="111";
  obj:object = {
    a:"1213131",
    b:234
  }
  tableOpt:object = {
      getUrl:function(){
        return "/api/gettable"
      },
      pageOption:{
        index:1,
        pageSize:15,
        indexKey:"index",
        pageSizeKey:"pageSize"
      },
      dataHandle(data:any){
        // console.log(data);
        return {
          data:data.data.rows,
          total:data.data.total,
          index:data.data.index,
        }
      }

  }
  mounted () {
    this.greet();
  }
  get computedMsg(){
    return "computed" + this.msg
  }
  greet () {
    // alert('greeting: ' + this.msg)
  }
}
</script>
