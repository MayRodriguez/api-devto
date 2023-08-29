const mongoose = require("mongoose");
const Post = require("../models/post.model"); 

async function getAll(search = '') {
    // const filters = {}; 
    // if(titleFilter) {
    //     filters.title = new RegExp(titleFilter, "i")
    // }
    // if (koder && mongoose.isValidObjectId(koder)) {
    //     filters.koder = koder;
    // }
    // return Practice.find(filters).populate("koder")

    // console.log(titleFilter)
    
    return Post.find({title: { $regex: search, $options: 'i' } }).populate("user"); //Buscamos a koder en el modelo
}