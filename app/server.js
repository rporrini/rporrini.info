var express = require('express');
var file = require('./filesystem');

var app = express();
app.use('/static', express.static(file.pathOf('assets')));
app.get('/alive', function(req, res){
  res.send('OK');
});
exports.app = app;
