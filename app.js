/**
 * Created by donghyunkim on 2017. 3. 22..
 */

var express = require("express");
var bodyParser = require("body-parser");
var ejs = require('ejs');
var router = require("./router/index");
var app = express();


var dbConnection = require("./models/dbConnection");



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/data"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(router);

//데이터 연결 부분
dbConnection();


app.listen(3000, (req,res)=>{
 console.log("3000 PORT OPENED!!");
});





