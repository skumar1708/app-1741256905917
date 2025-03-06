const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photos: {
    type: [String],
    required: true
  },
  map: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Destination', destinationSchema);