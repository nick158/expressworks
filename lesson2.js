//static hosting of file from a given directory
var path = require('path');
var express = require('express');
var app = express();
//use middleware from the provided parameter
//fallback to a harcoded folder
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);