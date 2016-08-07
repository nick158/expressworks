//post request with encoded form.
//extracts the input of the form and responds wiht it reversed
var path = require('path');
var express = require("express");
//allows for the parsing of form request bodies
var bodyparser = require('body-parser');

var app = express();
//app.use calls a middleware library for usage in app
app.use(bodyparser.urlencoded({extended: false}))
//given the form has <input name='str'>,
//there is now a property named "str" in a body object which is form

app.post('/form', function(req, res){
	var line = req.body.str.split('').reverse().join('');
	res.end(line);
})

app.listen(process.argv[2]);