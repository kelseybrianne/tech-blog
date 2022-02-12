const router = require('express').Router();
const { User, Comment, Post } = require('../models');
// const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    const postData = await Post.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['name', 'ASC']],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts
    });
  });

// Login page
router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

// Registration page
router.get('/signup', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup');
});

router.get('/dashboard', async (req, res) => {
  const postData = await Post.findAll({
    // attributes: { exclude: ['password'] },
    // order: [['name', 'ASC']],
  });
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render('dashboard', {
    posts
  });
})


module.exports = router;
