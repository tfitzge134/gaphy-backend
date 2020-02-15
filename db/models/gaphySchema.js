const mongoose = require('mongoose')

const gaphySchema = new mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('Gif', gaphySchema);