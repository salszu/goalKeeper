//dependecies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');


var app = express();


//locahost port
var port = 3000;
app.listen(port);