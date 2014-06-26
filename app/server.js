var express = require('express');
var file = require('./filesystem');
var fs = require('fs');

var app = express();
app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

app.use('/static', express.static(file.pathOf('assets')))
	.get('/alive', function(req, res){
	   	res.send('OK');
	})
	.get('/', function(req, res){
		res.render('index', {});
	})
	.get('/posts/:id', function(req, res){
		res.render('../posts/' + req.params.id, {});
	})
	.get('*', function(req, res){
		res.send(404, 'There is nothing here!');
	});
app.use(function(err, req, res, next){
		res.send(404, 'There is nothing here!');
	});

module.exports.app = app;
