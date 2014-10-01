var should = require('should');
var post = require('../../app/post');
var testdoubles = require('./testdoubles');

describe('post', function(){
	describe('summaryFrom', function(){
		it('should return an empty object on empty line', function(){
			var reader = testdoubles.reader();
			reader.withLine('#{}');
			
			var summary = post.summaryFrom(reader);
			
			summary.should.not.be.null;
		});
		
		it('should read all the values of the returned object', function(){
			var reader = testdoubles.reader();
			reader.withLine("#{ \"url\": \"foo\", \"date\": \"bar\"}");
			
			var summary = post.summaryFrom(reader);
			
			summary.url.should.be.equal('foo');
			summary.date.should.be.equal('bar');
		});
	});
});