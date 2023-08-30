const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('../db/index');
const postRouter = require('./routes/post.route');
const authRouter = require("./routes/auth.route");
const userRoutes = require('./routes/user.router');
require('dotenv').config();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter)
app.use('/post', postRouter);
app.use('/user', userRoutes) 

app.get("/", (req, res) => {
    res.json({
        message: "koders APIv1"
    })   
})

module.exports = app;