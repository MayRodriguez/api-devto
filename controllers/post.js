const Post = require('../src/models/post.model');
const PostUsecase = require("../src/usecases/post.usecase")


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

const getSearch = async (req, res) => {
    try {
        const {title} = req.query
        const allPosts = await PostUsecase.getAll(title);
        res.json({
            message: "Post con: ", title, 
            data: {
                practices: allPosts
            }
        })
        } catch (err) {
            res.status(500);
            res.json({
                message: "something went wrong",
                error: err.message
            })
        }
}

module.exports = {
    getPosts,
    createPost,
    getPostById,
    getSearch
};