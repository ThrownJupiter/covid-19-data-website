var request = require("request");
var express = require("express");
var router = express.Router();

/*
  ALL OF THE ROUTES IN THIS PAGE REQUIRE AN AUTHENTICATED USER
*/

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("MEP", {
    title: "DSI Customer Information - ALL MEP",
    username: req.user.displayName,
    whichRegion: function() {
      return "content.mep.all";
    },
    whichJS: function() {
      return "js.mep.all";
    }
  });
});

/* GET MEP region NA2 */
router.get("/NA2", function(req, res, next) {
  res.render("MEP", {
    title: "DSI Customer Information - MEP - NA2",
    username: req.user.displayName,
    region: NA2,
    whichRegion: function() {
      return "content.mep.na2";
    },
    whichJS: function() {
      return "js.mep.region";
    }
  });
});
/* GET MEP region NA2 */
router.get("/NA3", function(req, res, next) {
  res.render("MEP", {
    title: "DSI Customer Information - MEP - NA3",
    username: req.user.displayName,
    region: NA3,
    whichRegion: function() {
      return "content.mep.na3";
    },
    whichJS: function() {
      return "js.mep.region";
    }
  });
});
module.exports = router;
