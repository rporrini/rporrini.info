var should = require('should');
var blog = require('../../app/blog');

describe('blog', function(){
	describe('post', function(){
		it('should expose the formatted date', function(){
			var post = blog.post({date: new Date("October 13, 2012 11:13:00")});
			
			post.date.should.equal("October 13th, 2012");
		});
	});
});
