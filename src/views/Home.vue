<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click = "getCurrent">获取当前页码</button>
    <button @click = "getCurrentData">获取当前页数据</button>
    <j-table ref = "jtable"  :tableOpt = "tableOpt"></j-table>
    <j-table ref = "jtable1"  :tableOpt = "tableOpt"></j-table>
    <j-table ref = "jtable2"  :tableOpt = "tableOpt"></j-table>
    <j-button inline >
        确定
    </j-button>
<j-button inline circle threed @click = "ccc">
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "primary" circle threed @click = "ddd">
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "success" threed style = "">
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>


    
    <j-button inline type = "warning" threed>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "danger" threed>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "info" threed>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "remind" threed>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>




  <div style = "margin-top :30px"></div>
    <j-button inline text>
        确定
    </j-button>
<j-button inline circle threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "primary" circle threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "success" threed style = "" text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>


    
    <j-button inline type = "warning" threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "danger" threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "info" threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "remind" threed text>
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>



  <div style = "margin-top :30px"></div>
    <j-button inline >
        确定
    </j-button>
<j-button inline circle  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "primary" circle  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
<j-button inline type = "success"  style = "" >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>


    
    <j-button inline type = "warning"  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "danger"  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "info"  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>
    <j-button inline type = "remind"  >
        确定dasdasdasdasdasdadas发撒打算的
    </j-button>


   
  </div> 
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import jTable from '../comp/comp/table/table.vue';//table
import jButton from "../comp/comp/button/button.vue";//button
@Component({
  components: {
    HelloWorld,
    jTable,
    jButton
  },
})

export default class Home extends Vue {
  obj:object = {
    a:"1213131",
    b:234
  }
  public $refs!: {
    jtable: jTable
  }
  tableOpt:object = {
      getUrl:function(){
        return "/api/gettable"
      },
      pageOption:{
        index:5 ,
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
  greet () {
    // alert('greeting: ' + this.msg)
  }
  getCurrent(){
    console.log(this.$refs.jtable.getCurrentPage())
  }
  getCurrentData(){
    console.log(this.$refs['jtable'].getCurrentPageData())
  }
  ccc(){
    console.log("ccc");
  }
  ddd(){
    console.log("ddd");
  }
}
</script>
