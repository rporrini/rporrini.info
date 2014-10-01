var express = require('express');
var file = require('./filesystem');
var fs = require('fs');
var Poet = require('poet');

var send404 = function(res){
	res.send(404, 'There is nothing here!');
};

var app = express();
var poet = Poet(app);

poet.init();
app.set('views', file.pathOf('views'));
app.set('view engine', 'jade');

poet.addRoute('/blog/post/:post', function (req, res) {
	  var post = poet.helpers.getPost(req.params.post);
	  if (post) {
	    res.render('post-post', { post: post }); 
	  } else {
		  send404(res);
	  }
});

poet.addRoute('/blog/tags/:tag', function (req, res) {
  var taggedPosts = poet.helpers.postsWithTag(req.params.tag);
  if (taggedPosts.length) {
    res.render('tag', {
      posts: taggedPosts,
      tag: req.params.tag
    });
  }
});

poet.addRoute('/blog/categories/:category', function (req, res) {
  var categorizedPosts = poet.helpers.postsWithCategory(req.params.category);
  if (categorizedPosts.length) {
    res.render('category', {
      posts: categorizedPosts,
      category: req.params.category
    });
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
		res.render('index', {});
	})
	.get('*', function(req, res){
		send404(res);
	});
	
app.use(function(err, req, res, next){
		send404(res);
});

module.exports.app = app;
