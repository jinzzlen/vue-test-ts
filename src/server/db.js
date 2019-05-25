
'use strict';
var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/mongoTest";
/**
 *   @param client 数据库连接后的client对象
 *   @param dbname 修改的表名
 *   @param data   操作的数据
 **/
const insertOneData = (dbname,data,cb) => {
    MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(error, client){
        var devices = client.db('mongoTest');
        devices.collection(dbname).insert(data,function(error, result){
            if(error)
            {
                cb(error)
            }else{
                cb(result)
            }
            client.close();
        });
    });

}
/**
 *   @param client 数据库连接后的client对象
 *   @param dbname 查询的表名
 **/
const selectAllData = (dbname,cb) => {
    MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(error, client){
        var devices = client.db('mongoTest').collection(dbname);
        
        devices.find().toArray(function(error, result) { 
            //如果存在错误
            if(error)
            {
                cb(error);
            }else{
                devices.find().count(function(error, count) {
                    cb({
                        data:result,
                        count,
                    });
                })
                
            }
            // client.close();
        })
    });
},

/**
 * 按照条数获取数据
 * @param {string} dbname 
 * @param {number} page 页码
 * @param {number} rowcount 页总条数
 * @param {function} cb 回掉函数
 */
queryPageData = (dbname,page,rowcount,cb) => {
    page = parseInt(page);
    rowcount = parseInt(rowcount);
    console.log(1);

    MongoClient.connect(DB_URL, { useNewUrlParser: true }, function(error, client){
        console.log("数据库打开");
        var devices = client.db('mongoTest').collection(dbname);
        var _num = rowcount;//每页几条
        var _total = 0;
        var _skip = (page-1) * _num;//获取数据
        devices.find().count(function(error, Count) {
            if(!error){
                _total = Count;
                console.log(_skip);
                let rel = devices.find().limit(_num).skip(_skip)
                rel.toArray((error,result) => {
                    if(!error){
                        cb({
                            success:true,
                            index:page,
                            totalPage:Math.ceil(_total/_num),
                            data:result,
                            count:_total,
                        })
                        client.close();

                    }else{
                        cb({
                            success:false,
                            errorMsg:"查询数据出错：" + error
                        })
                        client.close();
                    }
                    
                })
                
            }else{
                cb({
                    success:false,
                    errorMsg:"数据库连接失败" + error
                })
            }
        })
        
    });

}

module.exports = {
    insertOneData,selectAllData,queryPageData
}