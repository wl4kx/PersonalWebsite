// Load the http module to create an http server.
var express = require('express');
var app = express();
var port = 8000;
// app.get('/', function(req, res){
//     res.send('hello world');
// }).listen(port);
app.use(express.static(__dirname+"/public"));
app.listen(port);
console.log("server running on port " + port);