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
        index:1 ,
        pageSize:1,
        indexKey:"index",
        pageSizeKey:"pageSize"
      },
      dataHandle(data:any){
        return {
          data:data.rows,
          index:data.index,
          total:data.total,
          totalPage:data.totalPage,
        }
      },
      titleMap:[
        {
          name:"名字",
          key:"name",
        },
        {
          name:"年龄",
          key:"age"
        },
        {
          name:"手机号",
          key:"phone"
        },
        {
          name:"年份",
          key:"year",
        },
        {
          name:"月份",
          key:"month",
        },
        {
          name:"月份",
          key:"month",
        },
        {
          name:"日",
          key:"day",
        },
        {
          name:"t",
          key:"t",
        },
        {
          name:"z",
          key:"z",
        }
      ]

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
