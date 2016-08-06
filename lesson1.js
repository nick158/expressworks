var express = require("express");
var app = express();
//maps the home request
app.get("/home", function(req,res) {
	res.end("Hello World!")
})
//listens for any reqeuest to servers from
//supplied port argument
app.listen(process.argv[2]);