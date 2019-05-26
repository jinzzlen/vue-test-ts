<template>
    <div :class = "{'j__box__inline':inline}">
        <button class = "j__btn" :class = "[
            type ? 'j__button__'+type : 'j__button__default',
            {
             'j__button__text':text,
             'j__button__circle':circle,
             'j__button__3D':threed
            },
            
        ]" v-on="$listeners">
            <slot/>
        </button>
    </div>
</template>

<script lang="ts">
    import { Vue,Component,Prop,Provide } from "vue-property-decorator";
    @Component({})
    export default class jButton extends Vue {
        @Prop() type ?:string;
        @Prop({default:true,type:Boolean}) inline ?: boolean;
        @Prop({default:false,type:Boolean}) text ?: boolean;
        @Prop({default:false,type:Boolean}) circle ?: boolean;
        @Prop({default:false,type:Boolean}) threed ?: boolean;


    }
</script>


<style scoped>
    .j__box__inline{
        display:inline;
        margin-left:5px;
        margin-right:5px;
    }
    .j__btn {
        cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
        outline: none; /* 不显示轮廓线 */
        font-size: 12px; /* 字体大小 */
        border:1px solid #efefef;
        box-sizing:border-box;
        padding:5px 10px;
        border-radius: 3px;
    }
    .j__button__3D{
        transition-duration: .3s;
         margin-top:10px;
        margin-bottom:10px;
    }
    .j__button__default {
        background:#fff;
        color:#333;
    }
    .j__button__default:hover {
        background:#efefef;
        color:#444;
    }
    
    .j__button__default.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #dbe5ec, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #dbe5ec, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__default.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #dbe5ec, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #dbe5ec, 0 0 0 rgba(0, 0, 0, 0.3);
    }
    .j__button__text.j__button__default:hover{
        color:#999!important;
    }
    .j__button__text.j__button__3D.j__button__default{
         border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }
    .j__button__text.j__button__3D.j__button__default:hover{
         border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }
    .j__button__text.j__button__3D.j__button__default:active{
        transform: translate(0)!important;
         border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }
  
  
  
  
   .j__button__primary {
        background:#069af4;
        color:#fff;
    }
    .j__button__primary:hover {
        background:#47b0f7;
        color:#fff;
    }
    .j__button__primary.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__text.j__button__primary:hover{
        color:#069af4!important;
    }
    .j__button__text.j__button__3D.j__button__primary{
        transform: translate(0)!important;
        border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }

     .j__button__primary.j__button__3D:hover{
        background:#1194e6;
    }
     .j__button__primary.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #0880d7, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #0880d7, 0 0 0 rgba(0, 0, 0, 0.3);
    }
  
  
  
  
  
    .j__button__success {
        background:#a4de47;
        color:#fff;
    }
    .j__button__success:hover {
        background:#b8e56c;
        color:#fff;
    }
    
    .j__button__success.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__success.j__button__3D:hover{
        background:rgb(146, 204, 53);
    }
    .j__button__success.j__button__3D:active{
         
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #84b91f, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #84b91f, 0 0 0 rgba(0, 0, 0, 0.3);
    }
    .j__button__text.j__button__success:hover{
        color:#a4de47!important;
    }
    .j__button__text.j__button__3D.j__button__success{
        transform: translate(0)!important;
        border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }






    .j__button__warning {
        background:#ffae2d;
        color:#fff;
    }

    .j__button__warning:hover {
        background:#ffc056;
        color:#fff;
    }
    .j__button__warning.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3);
    }   
    .j__button__warning.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #e59501, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #e59501, 0 0 0 rgba(0, 0, 0, 0.3);
    }
    .j__button__warning.j__button__3D:hover{
        background:#f8a621;
    }
    .j__button__text.j__button__warning:hover{
        color:#ffae2d!important;
    }
    .j__button__text.j__button__3D.j__button__warning{
        transform: translate(0)!important;
        border:none!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }






    .j__button__danger {
        background:#ff4356;
        color:#fff;
    }
    .j__button__danger:hover {
        background:#ff7680;
        color:#fff;
    }
    .j__button__danger.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__danger.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #ff1022, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #ff1022, 0 0 0 rgba(0, 0, 0, 0.3);
    } 
    .j__button__danger.j__button__3D:hover{
        background:#ea3c4d;
    }
    .j__button__text.j__button__danger:hover{
        color:#ff4356!important;
    }
    .j__button__text.j__button__3D.j__button__danger{
        border:none!important;
        transform: translate(0)!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }



    .j__button__info {
        background:#909399;
        color:#fff;
    }
    .j__button__info:hover {
        background:#a6a9ad;
        color:#fff;
    }
    .j__button__info.j__button__3D {
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #7b7d85, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #7b7d85, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__info.j__button__3D:hover{
        background:#85888b;
    }
    .j__button__info.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #8a8c92, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #8a8c92, 0 0 0 rgba(0, 0, 0, 0.3);
    } 
    .j__button__text.j__button__info:hover{
        color:#909399!important;
    }
    .j__button__text.j__button__3D.j__button__info{
        border:none!important;
        transform: translate(0)!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }






    .j__button__remind {
        background:#7672e6;
        color:#fff;
    }
    .j__button__remind:hover {
        background:#a49eee;
        color:#fff;
    }
    .j__button__remind.j__button__3D{
        border:none!important;
        -webkit-box-shadow: 0 7px 0 #5246e2, 0 8px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 7px 0 #5246e2, 0 8px 3px rgba(0, 0, 0, 0.3);
    }
    .j__button__remind.j__button__3D:hover{
        background:#6560ec;
    }
    .j__button__remind.j__button__3D:active{
        transform: translate(0,5px);
        -webkit-box-shadow: 0 0 0 #5246e2, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #5246e2, 0 0 0 rgba(0, 0, 0, 0.3);
    }
     .j__button__text.j__button__remind:hover{
        color:#7672e6!important;
    }
    .j__button__text.j__button__3D.j__button__remind{
        border:none!important;
        transform: translate(0)!important;
        -webkit-box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 #7b7d85, 0 0 0 rgba(0, 0, 0, 0.3);
    }


    /* border类 */
    .j__button__text{
        border: 0px solid transparent!important;
        background:transparent!important;
        color:#333!important;
        margin:0!important;
        padding:0!important;
    }
    
    /* border radius 类 */
    .j__button__circle{
        border-radius:17px;
    }
    
</style>
