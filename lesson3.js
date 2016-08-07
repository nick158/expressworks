//uses jade templating to display a date
var path = require('path');
var express = require('express');

var app = express();

app.set('view engine', 'jade');
//specify path to template files
app.set("views", path.join(process.argv[3]))
//the endpoint, renders template with date data
app.get('/home', function(req, res){
	res.render('index', {date: new Date().toDateString()});
})
app.listen(process.argv[2]);