const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./db');
const postRouter = require('./src/routes/post.route');
const authRouter = require("./src/routes/auth.route");

require('dotenv').config();
const port = process.env.PORT || 3000;

connectDB();


app.use(express.json());
app.use(cors());

app.use('/auth', authRouter)
app.use('/post', postRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
