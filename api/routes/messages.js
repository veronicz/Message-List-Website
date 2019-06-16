var express = require('express');
var router = express.Router();

var messages = [
  { id: 1, message: 'Hi~~' },
  { id: 2, name: 'Sherry', message: 'Have a nice day!' }
];

router.get('/', function(req, res, next) {
  res.json(messages);
});

router.post('/', function(req, res, next) {
  new_msg = req.body;
  new_msg.id = generate_msg_id();
  messages.push(new_msg);
  res.json(new_msg);
});

router.delete('/:id', function(req, res, next) {
  let msg = messages.find(msg => msg.id === parseInt(req.params.id));
  if (msg) {
    let index = messages.indexOf(msg);
    messages.splice(index, 1);
    res.json(msg);
  } else {
    res.status(404);
    res.send(`Message with id ${id} is not found`);
  }
});

router.delete('/', function(req, res, next) {
  messages = [];
  res.json(messages);
});

function generate_msg_id() {
  if (messages.length === 0) {
    return 1;
  } else {
    return messages[messages.length - 1].id + 1;
  }
}

module.exports = router;