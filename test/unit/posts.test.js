var should = require('should');
var posts = require('../../app/posts');
var writer = require('./testdoubles').writer();

describe('posts', function(){
	describe('get', function(){
		it('should return a post by its id', function(){
			writer.writeFile('post-id', 'any');
			
			should.exist(posts.byId('post-id').get(writer));
		});
	});
});