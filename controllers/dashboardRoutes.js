const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require('../utils/auth');

// Get Dashboard view

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
        where: { id: req.session.user_id },
      },
    ],
  });
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("dashboardhome", {
    // Because it's a layout other than main.handlebars, you have to include the layout attribute. This is saying the it's getting the layout from dashboard.handlebars.
    layout: "dashboard",
    posts,
    logged_in: req.session.logged_in
  });
});

// Get create post view
// Cannot get newpost
router.get("/newPost", withAuth, (req, res) => {
  res.render("newPost", {
    layout: "dashboard",
    logged_in: req.session.logged_in
  });
});

// Get edit post view
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
