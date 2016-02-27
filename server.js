var http = require('http');
var fs = require('fs');

function handler (request, response) {
  var method = request.method;
  console.log(method);

    var url = request.url;

    if (url === "/") {
      response.writeHead(200, {"Content-Type": "text/html"});
    }
    else if (url ==="/node") {
      response.writeHead(200, {"Content-Type": "text/html"});
    }
    else if (url === "/girls") {
      response.writeHead(200, {"Content-Type": "text/html"});
    }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
    }

      fs.readFile(__dirname + '/public/index.html', function(error, file) {
        if (error) {
          console.log(error);
          return;
        }
        response.end(file);
      });


  }
var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept accept!");
});
