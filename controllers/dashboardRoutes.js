const router = require("express").Router();
const { User, Comment, Post } = require("../models");

// Get Dashboard view
router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    // attributes: { exclude: ['password'] },
    // order: [['name', 'ASC']],
  });
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("dashboardhome", {
    layout: "dashboard",
    posts,
  });
});

// Get create post view
router.get("/new", async (req, res) => {
  res.render("newpost", {
    layout: "dashboard",
  });
});

module.exports = router;
