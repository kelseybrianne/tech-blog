const withAuth = (req, res, next) => {
  alert("inside withAuth");
  if (!req.session.user_id) {
    console.log("You are not logged in.");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
