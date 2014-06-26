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
	describe('/posts', function(){
		it('should return 404 when asked for a not existing post', function(done){
			request(server.app)
				.get('/posts/a-not-existing-post')
				.expect(404, done);
		});
		
		before(function(){
			file.write('posts/my-beautiful-post.jade', '{}', fs);
		});
		after(function(){
			file.remove('posts/my-beautiful-post.jade', fs);
		});
		
		it('should return 200 when asked for an existing post', function(done){
			request(server.app)
				.get('/posts/my-beautiful-post')
				.expect(200, done);
		});
	});
});
