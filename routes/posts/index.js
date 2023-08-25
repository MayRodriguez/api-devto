const express = require('express')
const router = express.Router()
const { getPosts, createPost, getPostById } = require('../../controllers/post');

// define the home page route
router.get('/', getPosts);
router.post('/create', createPost);
router.get('/:postId', getPostById);

module.exports = router;