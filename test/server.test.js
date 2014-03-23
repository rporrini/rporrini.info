var request = require('supertest');
var server = require('../app/server');
var file = require('fs');

describe('Application', function(){
	describe('/alive', function(){
		it('should give 200 as response', function(done){
			request(server.app)
				.get('/alive')
				.expect('OK', done);
		});
	});
	describe('/static', function(){
		before(function(){
			file.writeFile('app/assets/file.txt', 'content');
		});
		after(function(){
			file.unlink('app/assets/file.txt');
		});
		it('should mirror static resources', function(done){
			request(server.app)
				.get('/static/file.txt')
				.expect(200, done);
		});
	});
});
