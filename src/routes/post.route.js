const express = require("express");
const auth = require("../middlewares/auth.middleware")

router.get("/", getSearch);
router.post('/',  createPost);
router.get('/:postId', getPostById);


module.exports = router;
const posts = require("../usecases/posts.usecase");

const router = express.Router();
/*
router.post("/", auth, async (request, response) => {
    try {
      const publishData = request.body;
      const newPost = await posts.create(publishData);
      response.status(200);
      response.json({
        message: "New post created successfully",
        data: {
          post: newPost,
        },
      });
    } catch (error) {
      const status = error.name === "ValidationError" ? 400 : 500;
      response.status(error.status || status);
      response.json({
        message: "You sucks! Please, review your process.",
        error: error.message,
      });
    }
  });

  router.get("/", async (request, response) => {
    try {
      const { titleFilter, user } = request.query
      const allPosts = await posts.getAll(titleFilter, user);
  
      response.json({
        message: "Posts list total",
        data: {
          posts: allPosts,
        },
      });
    } catch (error) {
      response.status(500);
      response.json({
        message: "I suck! Please, forgive me :( ",
        error: error.message,
      });
    }
  });

  router.patch("/:id", auth, async (request, response) => {
    try {
      const { id } = request.params;
      const info = request.body;
  
      const postUpToDate = await posts.updateById(id, info);
  
      response.json({
        message: "The post is up to date",
        data: {
          post: postUpToDate,
        },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        message: "I suck! Please, forgive me :( ",
        error: error.message,
      });
    }
  });

  */










  
  // BORRAR POST



  router.delete("/:id", auth, async (request, response) => {
    try {
      const { id } = request.params;
      const postErased = await posts.deleteById(id);
  
      response.json({
        message: "Post erased successfully",
        data: {
          post: postErased,
        },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        message: "I suck! Please, forgive me :( ",
        error: error.message,
      });
    }
  });

  router.get("/:id", auth, async (request, response) => {
    try {
      const { id } = request.params;
  
      const post = await posts.getById(id);
  
      response.json({
        message: "Alright!",
        data: {
          post
        },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        message: "I suck! Please, forgive me :( ",
        error: error.message,
      });
    }
  });
  
  module.exports = router