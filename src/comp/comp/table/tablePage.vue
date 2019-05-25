<template>
    <div class = "j-table-page">
            <ul class = "page-box">
                <template v-if = "page.totalPage<=8">
                    
                        <li class="page-btn"  
                            v-for = "(index,key) in page.totalPage" 
                            :class = "parseInt(page.index) == parseInt(index)?'current':'normal'"                            
                            :key = "key"
                            @click = "getPage(index)">
                            {{ index }}
                            
                        </li>
                </template>
                <template v-if = "page.totalPage > 8">
                        <li class="page-btn"  
                            v-for = "(index,key) in 2" 
                            :class = "parseInt(page.index) == parseInt(index)?'current':'normal'"
                            :key = "'table_footer_start' + key"
                            @click = "getPage(index)">
                            {{ parseInt(index) }}
                        </li>
                        
                        <li class = "page-btn-ellipsis" 
                            v-show = 'page.index > 3'
                            v-hover = "'<'"
                            @click = "prePages(page.index-3)"> ... </li>

                        <li class="page-btn normal"  
                            v-if = "parseInt(page.index)-1>3 && parseInt(page.index)-1<= page.totalPage-2"
                            @click = "getPage(page.index-1)">
                            {{
                                page.index-1
                            }}
                        </li>
                        <li class="page-btn current"  
                            v-if = "parseInt(page.index)>2 && parseInt(page.index)<= page.totalPage-2"
                            @click = "getPage(page.index)">
                            {{
                                page.index
                            }}
                        </li>
                     
                        <li class="page-btn normal"  
                            v-if = "parseInt(page.index)+1 <= page.totalPage-2 && parseInt(page.index)+1 > 2"
                            @click = "getPage(page.index+1)">
                            {{
                                page.index+1
                            }}
                        </li>
                        
                        <li class = "page-btn-ellipsis" 
                            v-show = 'parseInt(page.totalPage -3) > parseInt(page.index)'
                            v-hover = "'>'"
                            @click = "nextPages(page.index+3)"> ... </li>
                        
                        <li class="page-btn"  
                            v-for = "(index,key) in [1,0]" 
                            :class = "parseInt(page.totalPage) - parseInt(index) == page.index?'current':'normal'"
                            :key = "'table_footer_last' + key"
                            @click = "getPage(page.totalPage - index)">
                            {{ parseInt(page.totalPage) - parseInt(index) }}
                        </li>
                </template>
                
                
            </ul>
    </div>
</template>

<script lang = "ts">

import { Vue, Component,Prop} from 'vue-property-decorator';
@Component({

})
export default class jTablePage extends Vue{
    @Prop({default:[]}) page!:number[];
    @Prop({}) pkey!:number[];

    myThis:any = this;
    nextPages(page:number):void{
        this.$_event.$emit(this.pkey + "TABLEEVENT","nextPage",page);
    }
    prePages(page:number):void{
        this.$_event.$emit(this.pkey + "TABLEEVENT","prePage",page);
    }
    getPage(page:number):void{
        this.$_event.$emit(this.pkey + "TABLEEVENT","appointPage",page);
    }
}   
</script>



<style scoped>
     .j-table-page{
        width:100%;
        text-align: center;
        padding-top:10px;
    }
    .j-table-page .page-box{
        width:50%;
        text-align:center;
        margin:0 auto;
    }
    .j-table-page .page-box .page-btn-ellipsis{
        display:inline-block;
        list-style: none;
        margin-left: 10px;
        margin-right: 10px;
        vertical-align: top;
        cursor:pointer;
    }
    .j-table-page .page-box .page-btn{
        width:30px;
        height:30px;
        background:#efefef;
        box-shadow: 0px 0px 3px #aeaeae;
        border-radius:5px;
        display:inline-block;        
        list-style: none;
        line-height: 30px;
        margin-left:5px;
    }
    .j-table-page .page-box .page-btn:hover{
        background:#e5e5e5;
        cursor:pointer;
    }
    .page-btn.current{
        background:rgb(141, 141, 240)!important;
        color:#fff;
    }
</style>
