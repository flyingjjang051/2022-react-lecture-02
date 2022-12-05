const express = require("express");
const app = express();
app.set("port", process.env.PORT || 8081);
const PORT = app.get("port");

app.set("view engine", "ejs"); // ejs는 html에 data를 쉽게 쓰기 위해 사용.....

// ejs , pug

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/user/join", (req, res) => {
  // template engine
  // 서버에서 테이터를 실어 보내다
  res.render("./user/join");
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
