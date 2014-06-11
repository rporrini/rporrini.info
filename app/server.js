var express = require('express');
var file = require('./filesystem');

var app = express();
app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

app.use('/static', express.static(file.pathOf('assets')))
   .get('/alive', function(req, res){
	   	res.send('OK');
   })
   .get('/', function(req, res){
	   res.render('index', {});
   });
exports.app = app;
