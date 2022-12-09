const db = require("./db/db");
const movieSchema = require("./models/MovieSchema");
const cloudinary = require("cloudinary");
const path = require("path");
const multer = require("multer");
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 8081);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/upload", express.static(path.join(__dirname, "/upload")));
app.set("view engine", "ejs");
const PORT = app.get("port");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_API_SECRET,
});

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
  //["호러","액션"]== 호러/액션
  const genre = Array.isArray(req.body.genre) ? req.body.genre.join("/") : req.body.genre;
  const summary = req.body.summary;
  const point = Number(req.body.point);
  //const poster = req.body.poster;
  const poster = req.file.path;
  //db에 넣기

  const insertMovie = new movieSchema({
    title: title,
    date: date,
    genre: genre,
    summary: summary,
    point: point,
    poster: poster,
  });
  cloudinary.uploader.upload(req.file.path, (result) => {
    insertMovie
      .save()
      .then((result) => {
        console.log(result);
        res.send("파일이 잘 저장되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.get("/list", (req, res) => {
  // db에서 읽어서 뿌리기...
  movieSchema
    .find()
    .then((result) => {
      console.log(result);
      res.render("list", { movieList: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 가동중`);
});
