const express = require('express');

var dbFunc = require('./db');

const app = express();  
    //导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors({
    origin: ['http://10.112.7.77:8080'],
    optionsSuccessStatus: 200 
}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))






app.get('/api/gettable', (req, res) => {
    /**
     * 数据库操作
     */
    dbFunc.queryPageData("nodetest",req.query.index,req.query.pageSize,(result)=>{
        if(result.success){
            res.json({
                code:200,
                message:"success",
                index:result.index,
                rows:result.data,
                total:result.count,
                totalPage:result.totalPage
            })
        }else{
            res.json({
                code:500,
                errorMsg:result.errorMsg,
            })
        }
        
        // client.close();

    });
    
})
app.get("/",(req,res)=>{
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end("port文件已启动")
})

app.listen(3000, () => {
    console.log('正在监听端口3000,http://10.112.7.77:3000'); 
})