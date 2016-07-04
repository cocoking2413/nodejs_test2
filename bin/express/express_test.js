/**
 * Created by Administrator on 2016-07-04.
 */
var express=require("express");
var fs=require('fs');
var app=express();
app.use(express.static('js'));
app.get('/',function(req,res){console.log(1);
    //res.send("Hello world!");
    //res.end("Hello world!");
    res.json({
        hello:'my',
        world:'test'
    });
});

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send(file);
    res.send('Hello GET');
});


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
});

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('应用实例，访问地址为http://%s:%s',host,port);
});