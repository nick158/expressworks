var express = require('express');
var path = require('path');
var stylus = require('stylus');

var app = express();
//so you don't need to haandle the get request
//server listens on port
//responds with the hosted files

//app.use creates static hosting of these files which can
//then be accessed by requests
//this is middleware that generates css files
	app.use(stylus.middleware(process.argv[3]));
//static hosting
	app.use(express.static(process.argv[3]));

//middleware

//
app.listen(process.argv[2]);