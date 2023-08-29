const express = require('express');
const app = express();
const connectDB = require('./db');
const postRoutes = require('./routes/posts');
const userRouter = require("./src/routes/users.router")
require('dotenv').config();
const cors = require('cors')
const mongoose = require("mongoose")
const server = require("./src/server")
const PORT = process.env.PORT || 8081;

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

app.use(express.json());
app.use(cors());

app.use("/post", postRoutes);
app.use("/user", userRouter)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
    .then(() => {
        console.log("DB conected");
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
            });
        }) 
    .catch((err) => {
        console.error("DB Error:", err)
    })
