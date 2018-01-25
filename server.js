const express = require('express');
const bodyParser = require('body-parser').text();
const app = express();
const http = require('http');

const port = 3000;
let messages = []

app.set('port', (process.env.PORT || port));

app.listen(3000, () => {
  console.log('Welcome to the chatroom at localhost:' + app.get('port') + '...')
});

app.post('/send', bodyParser, function(req, res) {
  messages.push(req.body);
  console.log(messages[0]);
  messages = [];
  res.status(200).send(messages);
})

module.exports = app;
