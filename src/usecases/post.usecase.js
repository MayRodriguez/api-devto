const mongoose = require("mongoose");
const Post = require("../models/post.model"); 
const user = require("../models/user.model")
const createError = require("http-errors")

async function getAll(search = '') {
    return Post.find({title: { $regex: search, $options: 'i' } }).populate("user"); //Buscamos a koder en el modelo
}

async function create(postData) {
    console.log('postdata', postData.user)
    if(!mongoose.isValidObjectId(postData.user)) {
        throw new createError(400, "Invalid user id")
    }
    console.log(postData.user)
    const userAsignacion = await user.findById(postData.user)

    if(!userAsignacion) {
        throw new createError(404, "User not found")
    }

    return Post.create(postData);
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
    deleteById,
    updateById
}