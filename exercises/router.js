const express = require("express");
const router = express();



router.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/game", (req, res) => {
  res.sendFile(__dirname + "/game.html");
});

router.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

router.get("/rate-us", (req, res) => {
  res.sendFile(__dirname + "/rate-us.html");
});

router.get("/ex-ar", (req, res) => {
  res.sendFile(__dirname + "/ex-ar.html");
});
router.get("/ex2.1", (req, res) => {
  res.sendFile(__dirname + "/ex2.1.html");
});
router.get("/order", (req, res) => {
  res.sendFile(__dirname + "/order.html");
});
module.exports = router;