var express = require('express');

var app = express();
app.use('/static', express.static(__dirname + '/assets'));
app.get('/alive', function(req, res){
  res.send('OK');
});
exports.app = app;
