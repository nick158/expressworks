//take a put request, identify and extract parameter
//return a hash of this id with the date using crypto
var express = require('express');
//hasing library
var crypto = require('crypto');

var app = express();
//put request handler
app.put('/message/:id', function(req, res){
	//extracts the parameter from the url
	var id = req.params.id;

	//creates a hash with date and id
	var str = crypto
	.createHash('sha1')
	.update(new Date().toDateString() + id)
	.digest('hex');
	//sends response
	res.send(str);
})

app.listen(process.argv[2])