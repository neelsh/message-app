const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use( bodyParser.json() );

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Earthlings!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Magic is happening at http://${hostname}:${port}/`);
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", function(req, res) {
   console.log(req.body);
});

app.listen(3000, () => {
  console.log('We are listening...')
});
