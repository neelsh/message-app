let messages = [];
//let id = 0;

module.exports = {
  update: (req, res) => {
    messages.push(req.body);
    console.log(messages[0]);
    messages = []
    res.status(200).send(messages);
  }
}
