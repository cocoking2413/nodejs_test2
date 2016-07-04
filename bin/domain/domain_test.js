/**
 * Created by Administrator on 2016-07-04.
 */
var eventEmitter=require("events").EventEmitter;
var domain=require("domain");

var emitter1=new eventEmitter();

//var domain1=domain.create();
//
//domain1.on('error',function(err){
//    console.log('domain 处理这个错误（'+err.message+'）');
//});
////显示绑定
//domain1.add(emitter1);
//
//emitter1.on("error",function(err){
//    console.log("监听处理（"+err.message+"）");
//});
//
//emitter1.emit("error",new Error("通过监听器处理"));
//
////emitter1.removeAllListeners('error');
//
//emitter1.emit('error',new Error('通过domain处理'));
//
var domain2=domain.create();

domain2.on('error',function(err){
    console.log("domain2 处理这个错误（"+err.message+"）");
});
//隐式绑定
domain2.run(function(){
    var emitter2=new eventEmitter();
    emitter2.emit('error',new Error("通过domain2处理"));
});

//domain1.remove(emitter1);
//emitter1.emit('error',new Error("装换为异常，系统将崩溃！"));
