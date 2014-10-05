var express = require('express');
var file = require('./filesystem');
var fs = require('fs');
var Poet = require('poet');

var send404 = function(res){
	res.send(404, 'There is nothing here!');
};

var app = express();
var poet = Poet(app, {posts: file.pathOf('posts')});

poet.watch().init();
app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

poet.addRoute('/blog/post/:post', function (req, res) {
	  var post = poet.helpers.getPost(req.params.post);
	  if (post) {
	    res.render('post', { post: post }); 
	  } else {
		  send404(res);
	  }
});

app.use('/static', express.static(file.pathOf('assets')))
	.get('/alive', function(req, res){
	   	res.send('OK');
	})
	.get('/', function(req, res){
		res.render('home', {});
	})
	.get('/blog', function(req, res){
		var posts = poet.helpers.getPosts(0, 100)
		res.render('blog', { posts: posts });
	})
	.get('*', function(req, res){
		send404(res);
	});

app.use(function(err, req, res, next){
		console.log(err)
		send404(res);
});

module.exports.app = app;
