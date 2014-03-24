var request = require('superagent');
var should = require('should');

describe('application', function(){
	describe('/alive', function(){
		it('should be accessible', function(done){
			request
				.get('http://www.rporrini.info/alive')
				.end(function(res){
					res.status.should.equal(200);
					done();
				});
		});
	});
});