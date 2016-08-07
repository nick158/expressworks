//write a server that, when it receives a GET
//reads a file, parses it to JSON
//respods with that content to the user

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res){
	//callback function that sends request
	var respond = function(err,object){
		if(!err){
			//parse to JSON
			object = JSON.parse(object);
			//respond wiht JSON
			res.json(object);	
		}
		else{
			res.err(err)
		}
	}
	//async read of file, calls the callback
	fs.readFile(process.argv[3], respond)
})

app.listen(process.argv[2]);