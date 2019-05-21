<template>
    <div class = "j-table-page">
            <ul class = "page-box">
                <li class = "page-btn">1</li>
                <li class = "page-btn">2</li>
                <li class = "page-btn-ellipsis"> ... </li>
                <li class="page-btn">8</li>
                <li class="page-btn">9</li>
            </ul>
    </div>
</template>

<script>
export default {

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
</style>
