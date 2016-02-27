var http = require('http');
var fs = require('fs');

function handler (request, response) {

  var method = request.method;

    var url = request.url;

    console.log(method, url);


    if (url === "/") {
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile(__dirname + '/assets/index.html', function(error, file) {
        if (error) {
          console.log(error);
          return;
        }
      response.end(file);
    });

  } else {
      fs.readFile(__dirname + url, function(error, file) {
        if (error) {
          console.log(error);
          return;
        } else {
          var extension = url.split('.').pop();
          response.writeHead(200, {"Content-Type": "text/" + extension});
          response.end(file);
        }
      });
    }

    var allTheData = '';

    request.on('data', function (chunkOfData) {
      
      allTheData += chunkOfData;
    });

    request.on('end', function() {
      console.log(allTheData);
      response.end();
    });
  }
var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept accept!");
});
