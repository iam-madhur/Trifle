// models/Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  pseudonym: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Problem', problemSchema);
