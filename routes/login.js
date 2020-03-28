var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("login", {
    title: "DSI Customer Information Website"
  });
});

module.exports = router;
