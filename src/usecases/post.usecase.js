const mongoose = require("mongoose");
const Post = require("../models/post.model"); 
const User = require("../models/user.model")
const createError = require("http-errors")

async function getAll(search = '') {
    // const filters = {}; 
    // if(titleFilter) {
    //     filters.title = new RegExp(titleFilter, "i")
    // }
    // if (koder && mongoose.isValidObjectId(koder)) {
    //     filters.koder = koder;
    // }
    // return Practice.find(filters).populate("koder")

    // return Post.find({title: { $regex: search, $options: 'i' } })
    return Post.find({title: { $regex: search, $options: 'i' } }).populate("user"); //Buscamos a koder en el modelo
}

async function create(postData) {
    //Validar que el id del koder tiene un formato de id
    // if(!mongoose.isValidObjectId(postData.user)) {
    //     throw new createError(400, "Invalid user id")
    // }
    console.log(postData.user)
    const userAsignacion = await User.findById(postData.user)
    // console.log('user desde la asignacion', userAsignacion)

    if(!userAsignacion) {
        // console.log('user desde el if', userAsignacion)

        throw new createError(404, "User not found")
    }

    return Post.create(postData);
}

module.exports = {
    getAll,
    create
}