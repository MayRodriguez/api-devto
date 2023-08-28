const User = require("../models/user.model");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt")
const createError = require("http-errors")

async function login (email, password){
    const user = await User.findOne({email})
    if(!user) {
        throw new createError(401, "Invalid data")
    }
    const isValidPassword = bcrypt.verify(user.password, password); //true || false
    if (!isValidPassword) {
        throw new createError(401, "Invalid data")
    }

    //generar jwt
    return jwt.sign({id: User._id    })
}
module.exports = {
    login
}