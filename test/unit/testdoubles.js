var Writer = function(){
	
	var readFileSync = function(path, encoding, callback){
		if(path == this.path){
			return this.content;
		}
	};
	
	var writeFile = function(path, content){
		this.path = path;
		this.content = content;
		return this;
	};
	
	var unlink = function(path){
		this.path = path;
		return this;
	};
	
	return {
		readFileSync: readFileSync,
		writeFile: writeFile,
		unlink: unlink
    };
};

var Reader = function(){
	
	var withLine = function(line){
		this.line = line;
	}
	
	var firstLine = function(){
		return this.line;
	}
	
	return {
		firstLine: firstLine,
		withLine: withLine
	}
}

exports.writer = Writer;
exports.reader = Reader;
