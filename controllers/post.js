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

const createPost = async (req, res) => {
    try {
        postData = req.body;
        console.log('post data desde donde se manda a llamar a create', postData)
        const newPost = await PostUsecase.create(postData);
        res.status(201);
        res.json({
            message: "Post created",
            data: {
                post: newPost,
            },
        });
    } catch (err) {
        const status = err.name === "ValidationError" ? 400 : 500; 
        res.status(status)
        res.json({
            message: "something went wrong",
            error: err.message,
        });
    }
}

const getPostById = async(req, res) => {
    try {
        const postId = req.params.postId;
        console.log(postId)
        const post = await Post.findById(postId);
        res.send({post});
    } catch(error){
        res.send({ ok: false, message: error?.message });
    }
}

const getSearch = async (req, res) => {
    try {
        const {search} = req.query
        const allPosts = await PostUsecase.getAll(search);
        res.json({
            message: "lista de posts",
            data: {
                posts: allPosts
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