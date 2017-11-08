'use strict';

const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  review: {type: String, required: true},
  created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('article', articleSchema);
