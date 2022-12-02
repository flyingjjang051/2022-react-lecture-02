//console.log("hello node");
//template engine
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
app.set("port", process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, "/public")));
const PORT = app.get("port");

const aboutRouter = require("./routes/about");
const majorRouter = require("./routes/major");
const researchRouter = require("./routes/research");

app.use("/about", aboutRouter);
app.use("/major", majorRouter);
app.use("/research", researchRouter);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/aaa", (req, res) => {
  res.render("aaa.html", { subTitle: "에이에이에이", contentsTitle: "에이에이에이학부", className: "aaa" });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
