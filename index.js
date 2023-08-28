const express = require('express');
const app = express();
const connectDB = require('./db');
const postRoutes = require('./routes/posts');
const userRouter = require("./src/routes/users.router")
require('dotenv').config();
const port = process.env.PORT || 3000;
const cors = require('cors')

connectDB();

app.use(express.json());
app.use(cors());

app.use("/post", postRoutes);
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
