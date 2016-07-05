/**
 * Created by Administrator on 2016-07-05.
 */
var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");
var cookieParser=require("cookie-parser");

app.use(express.static('js'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));
app.use(cookieParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log('cookies:',req.cookies);
});

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);

    var des_file = __dirname + '/js/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
                res.end('404');
            } else {
                var response = {
                    message: 'ok',
                    filename: req.files[0].originalname
                };
                console.log(response);
                res.end(JSON.stringify(response, null, 2));
            }
        });
    });
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("应用实例，访问地址http://%s:%s",host,port);
});