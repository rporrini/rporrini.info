var express = require('express');

var app = express();
app.get('/alive', function(req, res){
  res.send('OK');
});
exports.app = app;
