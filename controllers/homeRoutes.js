const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require("../utils/auth");

// Get homepage view
router.get("/", async (req, res) => {
  const postData = await Post.findAll();
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("homepage", {
    posts,
    logged_in: req.session.logged_in,
  });
});

// Get single post view
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["comment", "date_commented", "user_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const posts = postData.get({ plain: true });
    res.render("viewpost", {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get login page view
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Get logout page view
router.get("/logout", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Get signup page view
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
