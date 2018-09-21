const express = require("express");
const router = express.Router();

// var app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki");
});

router.post("/", (req, res, next) => {
  res.send("got to post /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
