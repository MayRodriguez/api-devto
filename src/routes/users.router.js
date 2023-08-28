const express = require("express")
const users = require("../usecases/user.usecase")

const router = express.Router();


router.post("/", async (request, response) =>{
    try{

        const userData = request.body;
        const newUser = await users.create(userData);

        response.status(201)
        response.json({
            message: "user created",
            data:{ newUser}
        })
        
        
    }catch(error){
        const status = error.name === "ValidationError" ? 400 : 500;
        response.status(status);
        response.json({
        message: "something went wrong",
        error: error.message,
    });

    }


})