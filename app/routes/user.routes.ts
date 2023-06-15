module.exports = (app) => {
  var router = require("express").Router();
  const users = require("../controllers/user.controller");

  router.post("/", users.create);
  router.get("/", users.findAll);

  app.use("/api/users", router);
};
