const express = require('express');
const bodyParser = require('body-parser').json();
const app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

app.set('port', (process.env.PORT || port));

app.listen(3000, () => {
  console.log('We are listening at localhost:' + app.get('port') + '...')
});

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Earthlings!\n');
})

app.post('/send', bodyParser, function(req, res) {
  console.log(req.headers);
  console.log(req.body);
  res.status(200).send('Hooray! It works...!')
});
