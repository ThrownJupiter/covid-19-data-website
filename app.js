require("dotenv").config();

var request = require("request");
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
const hbs = require("hbs");

var users = require("./routes/users");
var home = require("./routes/home");

var app = express();
// view engine, partials, and views setup
app.set("views", path.join(__dirname, "/template/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/template/partials"));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Passport requires session to persist the authentication
// so were using express-session for this example
app.use(
  session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: false,
    saveUninitialized: true
  })
);

app.use("/", home);
// Only allow authenticated users to access the /home route
app.use("/home", home);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
