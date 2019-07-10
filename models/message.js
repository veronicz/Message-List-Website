const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  message: String
});

module.exports = mongoose.model('Message', messageSchema);
