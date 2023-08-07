const express = require("express");
const postRouter = express.Router();
const { Post } = require("../models/post.model");
const { authentication } = require("../middleware/authentication");

postRouter.get("/posts", async (req, res) => {
  let data = await Post.findAll();
  res.send(data);
});

postRouter.get("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.send({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.send(error);
  }
});

postRouter.post("/posts", authentication, async (req, res) => {
  const { title, content, userId } = req.body;
  console.log(req.body);
  try {
    await Post.create({ title, content, userId });
    res.send("Post Created");
  } catch (error) {
    console.log(error);
  }
});

postRouter.patch("/update/:id", authentication, async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.send({ error: "Post not found" });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.json(post);
  } catch (err) {
    res.send({ error: "Internal Server Error" });
  }
});

postRouter.delete("/delete/:id", authentication, async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    await post.destroy();
    res.send("Post deleted");
  } catch (err) {
    res.send({ error: "Internal Server Error" });
  }
});
module.exports = { postRouter };
