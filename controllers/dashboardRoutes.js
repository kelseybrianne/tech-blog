const router = require("express").Router();
const { User, Comment, Post } = require("../models");

// Get Dashboard view
router.get("/", async (req, res) => {
  const postData = await Post.findAll();
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("dashboardhome", {
    layout: "dashboard",
    posts,
    logged_in: req.session.logged_in
  });
});

// Get create post view
router.get("/newpost", async (req, res) => {
  res.render("newpost", {
    layout: "dashboard",
    logged_in: req.session.logged_in
  });
});

router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const posts = postData.get({ plain: true });

    res.render('editpost', {
      layout: "dashboard",
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
