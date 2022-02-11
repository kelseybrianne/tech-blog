const router = require('express').Router();
const { User, Comment, Post } = require('../models');
// const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage');
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


module.exports = router;
