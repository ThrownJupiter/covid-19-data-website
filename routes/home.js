var request = require("request");
var express = require("express");
var router = express.Router();

/*
  ALL OF THE ROUTES IN THIS PAGE REQUIRE AN AUTHENTICATED USER
*/

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("home", {
    title: "COVID-19 - Per County",
    username: req.user.displayName,
    whichRegion: function() {
      return "content.county.all";
    },
    whichJS: function() {
      return "js.county";
    }
  });
});
module.exports = router;
