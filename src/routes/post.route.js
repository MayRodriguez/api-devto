const express = require('express')
const router = express.Router()
const { getPosts, createPost, getPostById, getSearch } = require('../../controllers/post');
const auth = require("../middlewares/auth.middleware")

// define the home page route
// router.get('/', getPosts);
// router.get('/', auth, getPosts); // necesita token
router.get("/", getSearch);
router.post('/create', auth, createPost);
router.get('/:postId', getPostById);


module.exports = router;