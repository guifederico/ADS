const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === "/" || req.url === "/index.html") {
        
        fs.readFile("./static/index.html", null, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(err.message);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                res.end();
            }    
        });
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada.')
    }    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});