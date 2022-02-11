const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
      
    //   res.json({ user: userData, message: 'You are now logged in!' });
    // });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    // ?? SAVE AND LOGGEDIN COME IN AS UNDEFINED IN THE ERROR

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(userData);
    // });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;