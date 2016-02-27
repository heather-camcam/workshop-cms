var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
module.exports = handler;

function handler (request, response) {

  var method = request.method;

    var url = request.url;

    console.log(method, url);


    if (url === "/") {
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile(__dirname + '/../assets/index.html', function(error, file) {
        if (error) {
          console.log(error);
          return;
        }
        response.end(file);
      });
    }
    else if(url === '/create-post'){
    response.writeHead(307, {"Location": '/' });
      var allTheData = '';
      request.on('data', function (chunkOfData) {

        allTheData += chunkOfData;
      });

      request.on('end', function () {

        var convertedData = querystring.parse(allTheData);
        console.log(convertedData);
        response.end();
      });

    } else {
      fs.readFile(__dirname + '/../assets' + url, function(error, file) {
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
}
