//write a route that extracts date from the query string
//in the GET URL
//ex: ?results=recent&include_tabs=true
//then output to user in json
var express = require('express');
var app = express();

app.get('/search', function(req, res){
	//req.query refers to the query strings
	//res.send auto sends in JSON
	res.send(req.query)
})

app.listen(process.argv[2]);