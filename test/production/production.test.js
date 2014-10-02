var request = require('superagent');
var should = require('should');

describe('application', function(){
	describe('/', function(){
		it('should be accessible', function(done){
			isAccessible('/', done);
		});
	});
	describe('/alive', function(){
		it('should be accessible', function(done){
			isAccessible('/alive', done);
		});
	});
	describe('first post', function(){
		it('should be accessible', function(done){
			isAccessible('/blog/post/hello-world', done);
		});
	});
	describe('/blog', function(){
		it('should be accessible', function(done){
			isAccessible('/blog', done);
		});
	});
});

function isAccessible(path, done){
	request
		.get('http://www.rporrini.info' + path)
		.end(function(res){
			res.status.should.equal(200);
			done();
		});
};