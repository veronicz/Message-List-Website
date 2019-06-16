var express = require('express');
var router = express.Router();

const initMessages = [
  { id: 1, message: 'Hi~~' },
  { id: 2, name: 'Sherry', message: 'Have a nice day!' }
];

router.get('/', function(req, res, next) {
  res.json(initMessages);
});

module.exports = router;
