const express = require("express")
const users = require("../usecases/user.usecase")


const router = express.Router();


router.get("/", async (request, response) =>{
    try{
        const allUsers = await users.getAllUsers();

        response.json({
            message: "Users list",
            data:{
                users: allUsers
            }
        })

    }catch(error){
        response.status(500);
        response.json({
        message: "something went wrong",
        error: error.message,
    });

    }
})

router.post("/", async (request, response) =>{
console.log("router post de users")

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

router.get("/:id",async (request, response) =>{
    try{
        const id = request.params.id;
        const user = await users.getUserById(id)
        response.json({
            message: `User ${user}`,
            data:{
                user
            }
        })


    }catch(error){
        response.status(error.status || 500);
    response.json({
      message: "something went wrong",
      error: error.message,
    });
    }

})

module.exports = router;