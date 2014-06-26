var express = require('express');
var file = require('./filesystem');
var fs = require('fs');
var send404 = function(res){
	res.send(404, 'There is nothing here!');
};

var app = express();
app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

app.use('/static', express.static(file.pathOf('assets')))
	.get('/alive', function(req, res){
	   	res.send('OK');
	})
	.get('/', function(req, res){
		res.render('home', {});
	})
	.get('/posts/:id', function(req, res){
		res.render('../posts/' + req.params.id, {});
	})
	.get('*', function(req, res){
		send404(res);
	});
app.use(function(err, req, res, next){
		send404(res);
	});

module.exports.app = app;
