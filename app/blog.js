var moment = require('moment');

exports.post = post = function (post) {
	return {
		date: moment(post.date).format("MMMM Do, YYYY"),
		title: post.title,
		content: post.content,
		url: post.url
	};
};

exports.posts = function (posts) {
	var result = [];
	posts.forEach(function (p) {
		result.push(post(p));
	});
	return result;
};
