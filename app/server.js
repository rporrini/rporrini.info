var express = require('express');
var file = require('./filesystem');
var fs = require('fs');
var posts = require('./posts');

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
		try{
			res.render('post', posts.byId(file.pathOf('posts/' + req.params.id)).get(fs));
		}catch (e) {
			res.send(404);
		}
	});
module.exports.app = app;
