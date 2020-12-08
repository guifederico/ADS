var http = require('http');
http.createServer(function(request, response) {
    response.end('Oi, mundo');
}).listen(3000);