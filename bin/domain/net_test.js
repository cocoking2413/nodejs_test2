/**
 * Created by Administrator on 2016-07-04.
 */
var net=require("net");

var server=net.createServer(function(connection){
    console.log('client connected');
    connection.on('end',function(){
        console.log('connection closed');
    });
    connection.write('hello world!');
    connection.pipe(connection);
});
server.listen(3000,function(){
    console.log('server is listening at port : 3000');
});