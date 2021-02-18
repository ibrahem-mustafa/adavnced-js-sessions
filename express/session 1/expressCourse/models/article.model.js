const mongoose = require('mongoose');


const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  publisher: {
    id: {type: String, required: true},
    name: {type: String, required: true}
  },
  cover: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})


const Article = mongoose.model('articles', articleSchema)

module.exports = {Article}