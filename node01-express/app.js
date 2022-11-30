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
app.get("/members", (req, res) => {
  // mongo db / express / react /  node
  res.json({
    members: [
      { name: "장성호", grade: 10, address: "경기도 파주시" },
      { name: "양효정", grade: 1, address: "서울시 영등포구" },
      { name: "이가영", grade: 1, address: "서울시 강남구" },
      { name: "박아영", grade: 1, address: "서울시 양천구" },
      { name: "심지혜", grade: 1, address: "경기도 고양시" },
      { name: "신태식", grade: 1, address: "경기도 수원시" },
    ],
  });
});
app.get("/board", (req, res) => {
  res.json({
    board: [
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
      { name: "장성호", grade: 10, subject: "컴퓨터 팝니다.", contents: "사양 i7-9900k", date: "2022.11.30" },
    ],
  });
});
app.get("/movie", (req, res) => {
  console.log(req.query.title);
  fetch(`https://openapi.naver.com/v1/search/movie.json?query=${req.query.title}`, {
    headers: {
      "X-Naver-Client-Id": "EWAmQ4Hbg6givPZnU5vq",
      "X-Naver-Client-Secret": "lH56uhLQVV",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      //console.log(response);
      res.json(response);
    });
});
app.get("/movie02/:title", (req, res) => {
  console.log(req.params.title);
  console.log(req.params.director);
  fetch(`https://openapi.naver.com/v1/search/movie.json?query=${req.params.title}`, {
    headers: {
      "X-Naver-Client-Id": "EWAmQ4Hbg6givPZnU5vq",
      "X-Naver-Client-Secret": "lH56uhLQVV",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      //console.log(response);
      res.json(response);
    });
});

app.get("/contact", (req, res) => {
  //res.send("<h1>hello contact</h1>");
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});
app.get("/search", (req, res) => {
  //res.send("<h1>hello contact</h1>");
  res.sendFile(path.join(__dirname, "/public/search.html"));
});

app.listen(8081, () => {
  console.log("8081 포트에서 대기중");
});
