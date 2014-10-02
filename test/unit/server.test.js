var request = require('supertest');
var server = require('../../app/server');
var file = require('../../app/filesystem');
var fs = require('fs');
var should = require('should');
var testdoubles = require('./testdoubles');

describe('route', function(){
	describe('/static', function(){
		before(function(){
			file.write('assets/file.txt', 'content', fs);
		});
		after(function(){
			file.remove('assets/file.txt', fs);
		});
		it('should mirror static resources', function(done){
			request(server.app)
				.get('/static/file.txt')
				.expect(200, done);
		});
	});
	describe('/alive', function(){
		it('should be accessible', function(done){
			request(server.app)
				.get('/alive')
				.expect('OK', done);
		});
	});
	describe('/', function(){
		it('should be accessible', function(done){
			request(server.app)
				.get('/')
				.expect(200, done);
		});
	});
	describe('blog', function(){
		it('should be accessible', function(done){
			request(server.app)
				.get('/blog')
				.expect(200, done);
		});
	});
	describe('post', function(){
		before(function(){
			file.write('_posts/post.md', '{{{"title" : "The beautiful Post", "date" : "7-30-2012"}}}', fs);
		});
		after(function(){
			file.remove('_posts/post.md', fs);
		});
		it('should be accessible for an existing post', function(done){
			request(server.app)
				.get('/blog/post/the-beautiful-post')
				.expect(200, done);
		});
	});
});
