const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/message');

const initMessages = [
  { _id: new mongoose.Types.ObjectId(), message: 'Hi~~' },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Sherry',
    message: 'Have a nice day!'
  }
];

router.get('/', function(req, res, next) {
  Message.find()
    .exec()
    .then(messages => {
      if (messages.length == 0) {
        console.log('loading default messages...');
        Message.insertMany(initMessages)
          .then(defaultMessages => {
            res.json(defaultMessages);
          })
          .catch(err => {
            console.log(err);
            res.json([]);
          });
      } else {
        res.json(messages);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post('/', function(req, res, next) {
  const message = new Message({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    message: req.body.message
  });
  message
    .save()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  Message.findOneAndUpdate(
    { _id: id },
    { $set: { name: req.body.name, message: req.body.message } },
    { new: true }
  )
    .exec()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  Message.findOneAndDelete({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/', function(req, res, next) {
  mongoose.connection.db.dropCollection('messages', function(err, result) {
    //MongoError code 26 means no db with given namespace exists (already deleted)
    if (err && err.code != 26) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

module.exports = router;
