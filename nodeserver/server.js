
var express = require('express');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost/emberData');
var maps = require('./routes/maps');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

//Routes
app.use('/maps', maps);

//Test routes
app.get('/api/',function(req,res) {
	res.send('Working');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});



var server = app.listen(4500, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});