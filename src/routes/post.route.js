const express = require('express')
const router = express.Router()
const { createPost, getPostById, getSearch } = require('../../controllers/post');
const auth = require("../middlewares/auth.middleware")

router.get("/", getSearch);
router.post('/create', auth, createPost);
router.get('/:postId', getPostById);


module.exports = router;