module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });
  app.get("/projects", function(req, res) {
    res.render("projects");
  });
  app.get("/socialmedia", function(req, res) {
    res.render("socialmedia");
  });
  app.get("/contact", function(req, res) {
    res.render("contact");
  });
};
