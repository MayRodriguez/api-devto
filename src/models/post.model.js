const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  commentsData: {
    type: String
  },
  comments: {
    type: [String]
  },
  createdDate: {
    type: Date
  },
  image: {
    type: String
  },
  rating: {
    type: String
  },
  relevant: {
    type: Boolean
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
