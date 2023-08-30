const express = require("express");
const authUsecase = require("../usecases/auth.usecase")
const auth = require("../middlewares/auth.middleware")
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        console.log('pase aqui')
        const {email, password} = req.body
        const token = await authUsecase.login(email, password);
        res.json({
            message: "logged in",
            data: {
                token,
            }
        })
    } catch(err) {
        res.status(500);
        res.json({
            message: "something went wrong",
            error: err.message
        })
    }
    
})

module.exports = router;