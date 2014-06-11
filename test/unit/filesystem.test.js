var should = require('should');
var file = require('../../app/filesystem');

describe('filesystem', function(){
	describe('pathOf', function(){
		it('should expose the app directory', function(){
			file.pathOf('file').should.endWith('app/file');
		});
	});
	describe('write', function(){
		it('should write the file in the app directory', function(){
			var writer = new Writer();
			
			file.write('file', 'content', writer);
			
			writer.path.should.endWith('app/file');
			writer.content.should.equal('content');
		});
	});
	describe('delete', function(){
		it('should delete a file in the app directory', function(){
			var writer = new Writer();
			
			file.remove('file', writer);
			
			writer.path.should.endWith('app/file');
		});
	});
	describe('contentOf', function(){
		it('should return the content of the file when it exists on the file system', function(){
			var fileName = 'file.txt';
			
			var writer = new Writer();
			writer.writeFile(fileName, 'the content');
			
			file.contentOf(fileName, writer).should.equal('the content');			
		});
	});
});

function Writer(){};
Writer.prototype.readFileSync = function(path, encoding, callback){
	if(path == this.path){
		return this.content;
	}
};
Writer.prototype.writeFile = function(path, content){
	this.path = path;
	this.content = content;
};
Writer.prototype.unlink = function(path){
	this.path = path;
};