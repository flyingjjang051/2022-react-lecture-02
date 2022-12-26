const { all } = require("axios");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
const PORT = app.get("port");

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
