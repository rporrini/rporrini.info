var file = require('./filesystem');

var Post = function(id){
	
	this.id = id;
	
	var get = function(fileSystem){
		return JSON.parse(file.contentOf(id, fileSystem));
	};
	
	return {
		get: get
	};
};

module.exports.byId = function(id){
	return new Post(id);
};