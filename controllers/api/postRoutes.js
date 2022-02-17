const router = require("express").Router();
const { Post } = require("../../models");

router.post("/post/:id", async (req, res) => {
  const newComment = await Comment.create({
    comment: req.body.comment,
  });
});
