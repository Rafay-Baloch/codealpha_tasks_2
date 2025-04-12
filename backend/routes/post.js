const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/", async (req, res) => {
    const { userId, content } = req.body;
    const post = new Post({ user: userId, content });

    await post.save();
    res.status(201).json(post);
});

router.get("/", async (req, res) => {
    const posts = await Post.find().populate("user", "username");
    res.json(posts);
});

module.exports = router;
