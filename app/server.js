var express = require('express');
var file = require('./filesystem');

var app = express();
app.use('/static', express.static(file.pathOf('assets')))
   .get('/alive', function(req, res){
	   	res.send('OK');
   })
   .get('/', function(req, res){
	   	res.sendfile(file.pathOf('views/index.html'));
   });
exports.app = app;
