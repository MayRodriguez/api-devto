const mongoose = require("mongoose");
const Post = require('../models/post.model');
const User = require('../models/user.model');
const createError = require("http-errors");

async function getAll(titleFilter, user) {
  const filters = {};

  if (titleFilter) {
    filters.title = new RegExp(titleFilter, "i");
  }

  if (user && mongoose.isValidObjectId( user )) {
    filters.user = user;
  }

  return Post.find(filters).populate("User");
}


async function create( postData ) {
  if (!mongoose.isValidObjectId(postData.user)) {
    throw new createError(400, "Invalid user id");
  }

  const user = await User.findById(postData.user);

  if (!user) {
    throw new createError(404, "User not found");
  }

  return Post.create( postData );
}

async function getById( id ) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }

  const post = await Post.findById(id).populate("User");

  if (!post ) {
    throw new createError(404, "Post not found");
  }

  return post;
}

async function deleteById(id) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
  const postDeleted = await Post.findByIdAndDelete(id);

  if (!postDeleted) {
    throw new createError(404, "Post not found");
  }

  return postDeleted;
}

async function updateById(id, dataToUpdate) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
 
  if ( dataToUpdate.user ) {
    if (!mongoose.isValidObjectId( dataToUpdate.user )) {
      throw new createError(400, "Invalid user id");
    }

    const user = await User.findById( dataToUpdate.user );
    if (!user) {
      throw new createError(404, "User not found");
    }
  }

  dataToUpdate.updated_at = new Date();

  const postUpdated = await Post.findByIdAndUpdate(id, dataToUpdate, {
    new: true,
    runValidators: true,
  });

  if (!postUpdated) {
    throw new createError(404, "Post not found");
  }

  return postUpdated;
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById,
};