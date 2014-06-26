exports.pathOf = pathOf = function(subpath){
	return __dirname + '/' + subpath;
};
exports.write = function(subpath, content, writer){
	writer.writeFile(pathOf(subpath), content);
};
exports.remove = function(subpath, writer){
	writer.unlink(pathOf(subpath));
};
