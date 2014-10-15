var express = require('express');
var file = require('./filesystem');
var fs = require('fs');
var Poet = require('poet');
var blog = require('./blog');

var send404 = function(res){
	res.send(404, 'There is nothing here!');
};

var app = express();

var poet = Poet(app, {posts: file.pathOf('posts')});
var hidden_poet = Poet(app, {posts: file.pathOf('hidden-posts')});

hidden_poet.watch().init();
poet.watch().init();

app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

poet.addRoute('/blog/post/:post', function (req, res) {
	  var post = poet.helpers.getPost(req.params.post);
	  if (post) {
	    res.render('post', { post: blog.post(post) }); 
	  } else {
		  send404(res);
	  }
});

hidden_poet.addRoute('/hidden-blog/post/:post', function (req, res) {
	  var post = hidden_poet.helpers.getPost(req.params.post);
	  if (post) {
	    res.render('hidden-post', { post: blog.post(post) }); 
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
		res.render('blog', { posts: blog.posts(posts) });
	})
	.get('/hidden-blog', function(req, res){
		var posts = hidden_poet.helpers.getPosts(0, 100)
		res.render('blog', { posts: blog.posts(posts) });
	})
	.get('*', function(req, res){
		send404(res);
	});

app.use(function(err, req, res, next){
		console.log(err)
		send404(res);
});

module.exports.app = app;
