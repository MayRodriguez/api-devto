const mongoose = require("mongoose")
const ModelUser = require("../models/user.model")
const createError = require("http-errors")
const bcryptjs = require("../lib/bcrypt")
const userModel = require("../models/user.model")

//Post User, para crear un usuario 

async function create(userData){
    //Validamos si el usuraio existe con el mismo email
    const existingUser = await userModel.findOne({ email: userData.email});
    if (existingUser){
        throw new createError (412, "email already registed")
    }
    
    const passwordRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.+]).{8,}$")

    if(!passwordRegex.test(userData.password)){
        throw new createError(400, "Password too weak")
    }

    koderData.password = bcryptjs.encrypt(koderData.password)

    const newUser = await userModel.create(koderData)
    return newUser
}

//Get User, obtener todos los usuarios

async function getAllUsers(){
    const allUsers = await userModel.find();
    return allUsers

}

//Buscar user por Id
async function getUserById(id){
    if(!mongoose.isValidObjectId(id)){
        throw new createError(400, "Invalid id")
    }
    const user = await userModel.findById(id)
    if(!user){
        throw new createError(404, "User not found ")
    }
    return user
}



module.exports = {
    create,
    getAllUsers, 
    getUserById
}