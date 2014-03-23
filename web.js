var server = require('./app/server');

var port = process.env.PORT || 5000;
server.app.listen(port, function() {
  console.log("Listening on " + port);
});

