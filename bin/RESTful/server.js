/**
 * Created by Administrator on 2016-07-04.
 */
var express=require("express");
var app=express();
var fs=require("fs");
var util=require("util");

app.get('/listUsers',function(req,res){
    fs.readFile(__dirname+'/users.json','utf8',function(err,file){
        if(err){
            res.end("404");
        }
        console.log(file);
        res.end(file);
    });
});

var user_id=0;
var user=function(){
    var id=++user_id;
   return eval("({user"+id+":{ name:'hh',password:'password"+id+"',profession:'teacher',id:"+id+"}})");
};
app.get('/addUser',function(req,res){
    fs.readFile(__dirname+'/users.json','utf8',function(err,data){
        if(err){
            res.end("404");
        }
        data=JSON.parse(data);
        var newuser=user();
        data['user'+user_id]=newuser['user'+user_id];
        fs.writeFile(__dirname+'/users.json',JSON.stringify(data,null,2),'utf8');
        console.log(data);
        res.end(JSON.stringify(data,null,2));
    });
});

app.get('/deleteUser',function(req,res){console.log(0);
    fs.readFile(__dirname+'/users.json','utf8',function(err,data){
        if(err){
            res.end("404");
        }
        data=JSON.parse(data);
        delete data['user'+user_id];
        user_id--;
        fs.writeFile(__dirname+'/users.json',JSON.stringify(data,null,2),'utf8');
        console.log(data);
        res.end(JSON.stringify(data,null,2));
    });
});

app.get('/:id',function(req,res){
    fs.readFile(__dirname+'/users.json','utf8',function(err,data){
        if(err){
            res.end("404");
        }
        data=JSON.parse(data);
        var user=data['user'+req.params.id];
        console.log(user);
        if(user) {
            res.end(JSON.stringify(user, null, 2));
        }else{
            res.end("404");
        }
    });
});


var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('应用实例，访问地址 http://%s:%s',host,port);
});