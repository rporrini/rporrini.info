exports.summaryFrom = function(reader){
	return JSON.parse(reader.firstLine().replace('#', ''));
}

