var should = require('should');
var posts = require('../../app/posts');
var writer = require('./testdoubles').writer();

describe('posts', function(){
	describe('get', function(){
		it('should return a post by its id', function(){
			writer.writeFile('post-id', '{}');
			
			should.exist(posts.byId('post-id').get(writer));
		});
		it('should expose the content of a post', function(){
			writer.writeFile('post-id', '{"title": "my beautiful post"}');
			
			posts.byId('post-id').get(writer).title.should.equal('my beautiful post');
		});
	});
});