//console.log("hello node");
//template engine
const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, "/public")));
const PORT = app.get("port");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/about", (req, res) => {
  res.send("<h1>Hello About</h1>");
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
