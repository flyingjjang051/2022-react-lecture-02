//console.log("hello node");
//template engine
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, "/public")));
const PORT = app.get("port");

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "/public/index.html"));
  res.render("index");
});
app.get("/greeting", (req, res) => {
  res.render("greeting", { subTitle: "대학소개", contentsTitle: "학장인사말", className: "greeting" });
});
app.get("/history", (req, res) => {
  res.render("history", { subTitle: "대학소개", contentsTitle: "연혁", className: "history" });
});
app.get("/organization", (req, res) => {
  res.render("organization", { subTitle: "대학소개", contentsTitle: "조직 및 행정안내", className: "organization" });
});
app.get("/students", (req, res) => {
  res.render("students", { subTitle: "대학소개", contentsTitle: "학생회 및 동아리", className: "students" });
});
app.get("/location", (req, res) => {
  res.render("location", { subTitle: "대학소개", contentsTitle: "오시는 길", className: "location" });
});
app.get("/department", (req, res) => {
  res.render("department", { subTitle: "전공안내", contentsTitle: "학부", className: "department" });
});
app.get("/graduate", (req, res) => {
  res.render("graduate", { subTitle: "전공안내", contentsTitle: "대학원", className: "graduate" });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
