const express = require('express')
const router = express.Router()
const { getPosts, createPost, getPostById } = require('../../controllers/post');
const auth = require("../middlewares/auth.middleware")

// define the home page route
router.get('/', getPosts);
// router.get('/', auth, getPosts); // necesita token
router.post('/create', createPost);
router.get('/:postId', getPostById);

module.exports = router;