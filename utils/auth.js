const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    console.log("You are not logged in.");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
