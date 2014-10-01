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

exports.writer = Writer;
