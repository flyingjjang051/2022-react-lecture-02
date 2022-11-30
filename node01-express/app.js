const express = require("express");
const path = require("path");
// node의 기본모듈  path
const app = express();
// middle ware
app.use(express.static(path.join(__dirname, "/public")));
console.log(__dirname);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/about", (req, res) => {
  //res.send("<h1>hello about</h1>");
  res.sendFile(path.join(__dirname, "/public/about.html"));
});
app.get("/portfolio", (req, res) => {
  //res.send("<h1>hello portfolio</h1>");
  res.sendFile(path.join(__dirname, "/public/portfolio.html"));
});
app.get("/api", (req, res) => {
  res.send(`{name:"장성호",age:20}`);
});
app.get("/contact", (req, res) => {
  //res.send("<h1>hello contact</h1>");
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.listen(8081, () => {
  console.log("8081 포트에서 대기중");
});
