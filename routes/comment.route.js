const { Comment } = require("../models/comment.model");
const { Post } = require("../models/post.model");
const express = require("express");
const commentRouter = express.Router();

commentRouter.post("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { content, postId, userId } = req.body;

    const post = await Post.findByPk(id);
    if (!post) {
      return res.send({ error: "Post not found" });
    }
    const newComment = await Comment.create({ content, postId: id, userId });
    console.log(newComment);
    res.send(newComment);
  } catch (err) {
    console.error(err);
    res.send({ error: "Internal Server Error" });
  }
});
commentRouter.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the post exists
    const post = await Post.findByPk(id);
    if (!post) {
      return res.send({ error: "Post not found" });
    }

    // Get all comments associated with the post
    const comments = await Comment.findAll({
      where: { postId: id },
    });
    res.send(comments);
  } catch (err) {
    res.send({ error: "Internal Server Error" });
  }
});

module.exports = { commentRouter };
