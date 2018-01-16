const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Earthlings!\n');
});

server.listen(port, hostname, () => {
  console.log(`Magic is happening at http://${hostname}:${port}/`);
});
