exports.getLogin = (req, res, next) => {

  console.log(req.get("Cookie"));
  res.render("../views/shop/login.ejs", {
    path: "/login",
    pageTitle: "login",
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; ");
  res.redirect("/");
};
