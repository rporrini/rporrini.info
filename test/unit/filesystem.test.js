var should = require('should');
var file = require('../../app/filesystem');
var testdoubles = require('./testdoubles');

describe('filesystem', function(){
	describe('pathOf', function(){
		it('should expose the app directory', function(){
			file.pathOf('file').should.endWith('app/file');
		});
	});
	describe('write', function(){
		it('should write the file in the app directory', function(){
			var writer = testdoubles.writer();
			
			file.write('file', 'content', writer);
			
			writer.path.should.endWith('app/file');
			writer.content.should.equal('content');
		});
	});
	describe('delete', function(){
		it('should delete a file in the app directory', function(){
			var writer = testdoubles.writer();
			
			file.remove('file', writer);
			
			writer.path.should.endWith('app/file');
		});
	});
	describe('contentOf', function(){
		it('should return the content of the file when it exists on the file system', function(){
			var fileName = 'file.txt';
			
			var writer = testdoubles.writer().writeFile(fileName, 'the content');
			
			file.contentOf(fileName, writer).should.equal('the content');			
		});
	});
});
