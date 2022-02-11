const router = require('express').Router();
const { User, Comment, Post } = require('../models');
// const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage', {
      // logged_in: req.session.logged_in,
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
router.get('/registration', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('registration');
});


module.exports = router;
