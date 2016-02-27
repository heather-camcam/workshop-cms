var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var handlerModule = require('./src/handler.js');
var server = http.createServer(handlerModule);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept accept!");
});
