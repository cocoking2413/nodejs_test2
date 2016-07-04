/**
 * Created by Administrator on 2016-07-04.
 */
var net=require("net");
var client=net.connect({port:3000},function(){
    console.log('连接到server');
});
client.on("data",function(data){
    console.log(data.toString());
    client.end();
});
client.on('end',function(){
    console.log('断开与服务器连接');
});