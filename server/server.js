import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
    let filePath = path.join('FrontPage', req.url === '/' ? 'front.html' : req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    console.info(extname);
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("404 Not Found", 'utf8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf8');
        }
    });
});

const PORT = 4000;

server.listen(PORT, () => {
    console.info(`Server open on port ${PORT}`);
});