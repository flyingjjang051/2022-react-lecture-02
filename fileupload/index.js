const path = require("path");
const multer = require("multer");
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 8081);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
const PORT = app.get("port");

// multer 세팅
const diskStorage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, done) => {
    //done(null, file.originalname + "-" + Date.now());
    done(null, file.originalname.split(".")[0] + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileUpload = multer({ storage: diskStorage });

// routing
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/insert", (req, res) => {
  res.render("insert");
});

app.post("/insert", fileUpload.single("poster"), (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const genre = req.body.genre;
  const summary = req.body.summary;
  const point = req.body.point;
  //const poster = req.body.poster;
  const poster = req.file;
  console.log(title);
  console.log(date);
  console.log(genre);
  console.log(summary);
  console.log(point);
  console.log(poster);
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 가동중`);
});
