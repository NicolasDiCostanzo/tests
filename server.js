import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
    const filePath = path.join('FrontPage/front.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Error reading the html page");
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

const PORT = 4000;

server.listen(PORT, () => {
    console.info(`Server open on port ${PORT}`);
})