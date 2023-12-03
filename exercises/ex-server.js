const express = require("express");
const app = express();


const router = require('./router');
app.use("/thank_you.html",function (req,res,next){
  console.log("Your request has been processed")
  next();
})
app.use(router)
app.use(express.static(__dirname));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/game", (req, res) => {
//   res.sendFile(__dirname + "/game.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/contact.html");
// });

// app.get("/rate us", (req, res) => {
//   res.sendFile(__dirname + "/rate us.html");
// });

app.listen(5231, () => {
  console.log("Application started and Listening on port 5231");
});