const Post = require("../Models/Post");

exports.getPosts = (req, res) => {
    Post.find()
        .then((posts) => {
        res.json(posts);
        })
        .catch((err) => {
        console.log(err);
        });
    }

exports.createPost = (req, res) => {
    const post = new Post({
        name: req.body.name,
        image: req.body.image,
        content: req.body.content,
    });
    post
        .save()
        .then((result) => {
        res.json(result);
        })
        .catch((err) => {
        console.log(err);
        });
    }

exports.updatePost = (req, res) => {
    const post = new Post({
        _id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        content: req.body.content,
    });
    Post.updateOne({ _id: req.params.id }, post)
        .then((result) => {
        res.json(result);
        })
        .catch((err) => {
        console.log(err);
        });
    }

exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then((result) => {
        res.json(result);
        })
        .catch((err) => {
        console.log(err);
        });
    }

exports.getPost = (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
        res.json(post);
        })
        .catch((err) => {
        console.log(err);
        });
    }
