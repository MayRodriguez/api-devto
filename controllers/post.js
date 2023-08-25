const Post = require('../models/post');

const getPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.send({ posts });
    }catch(error){
        res.send({ error, message: "Ha ocurrido un error" });
    };
};

const createPost = async(req, res) => {
    try{
        const newPost = new Post(req.body);
        await newPost.save();
        return res.json({ ok: true, newPost, name: true });
    }catch(error){
        res.send({ ok: false, message: error?.message });
    }
}

const getPostById = async(req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        res.send({post});
    } catch(error){
        res.send({ ok: false, message: error?.message });
    }
}

module.exports = {
    getPosts,
    createPost,
    getPostById
};