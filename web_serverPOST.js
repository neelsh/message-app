const express = require('express');
const bodyParser = require('body-parser').json();
const app = express();

app.post("/send", bodyParser, function(req, res) {
   console.log(req.headers);
   console.log(req.body);
   res.status(200).send("yay");
});

app.listen(3000, () => {
  console.log('We are listening...')
});
