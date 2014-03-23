var express = require('express');

var app = express();
app.get('/alive', function(req, res){
  res.send('OK');
});
app.use('/static', express.static(__dirname + '/assets'));
exports.app = app;
