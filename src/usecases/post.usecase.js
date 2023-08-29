const mongoose = require("mongoose");
const Post = require("../models/post.model"); 
const User = require("../models/user.model")
const createError = require("http-errors")

async function getAll(search = '') {
    return Post.find({title: { $regex: search, $options: 'i' } }).populate("user"); //Buscamos a koder en el modelo
}

async function create(postData) {
    if(!mongoose.isValidObjectId(postData.user)) {
        throw new createError(400, "Invalid user id")
    }
    console.log(postData.user)
    const userAsignacion = await User.findById(postData.user)

    if(!userAsignacion) {
        throw new createError(404, "User not found")
    }

    return Post.create(postData);
}

module.exports = {
    getAll,
    create
}