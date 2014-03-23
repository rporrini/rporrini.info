var request = require('supertest');
var server = require('../app/server');
var file = require('../app/filesystem');
var fs = require('fs');

describe('server', function(){
	describe('/alive', function(){
		it('should give 200 as response', function(done){
			request(server.app)
				.get('/alive')
				.expect('OK', done);
		});
	});
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
});
