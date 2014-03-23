var request = require('supertest');
var server = require('../app/server');

describe('Application', function(){
	describe('/alive', function(){
		it('should give 200 as response', function(done){
			request(server.app)
				.get('/alive')
				.expect('OK', done);
		});
	});
});
