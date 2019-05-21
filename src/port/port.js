const express = require('express');
const app = express();  
    //导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/api/gettable', (req, res) => {
    /**
     * 数据库操作
     */
    let arr = [];
    
    for(i=0;i<req.query.total;i++){
        let obj = {
            num:i,
            name:"金振宗",
            phone:"17695518131",
            year:"1995",
            month:"05",
            day:"10",
            age:24
        }
        arr.push(obj);
    }


    res.json({ 
        code: 200,
        message: "查询表格成功",
        data:{
            index:req.query.index,
            total:arr.length,
            rows:arr
        }
    })
})
app.get("/",(req,res)=>{
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end("port文件已启动")
})

app.listen(3000, () => {
    console.log('正在监听端口3000,http://10.112.7.77:3000'); 
})