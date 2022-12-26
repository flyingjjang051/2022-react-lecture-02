const daySchema = require("./models/DaySchema");
const vocasSchema = require("./models/VocaSchema");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/db");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("port", process.env.PORT || 5000);

const PORT = app.get("port");

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/days", (req, res) => {
  daySchema
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
// 서버에서 클라이언트에서 온 데이터 받는 법

//url에 실려 놀때  http://localhost/days/190  params
//url에 실려 놀때  http://localhost/days?id=190  query
app.post("/days", (req, res) => {
  //req.params.id
  //req.query.id
  //console.log(req.body.day);
  const { day, id } = req.body;
  const insertDay = new daySchema({
    id: id,
    day: day,
  });
  insertDay
    .save()
    .then(() => {
      console.log("잘들어갔습니다.");
      res.json({ state: "ok" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/vocas", (req, res) => {
  const { day, kor, eng, done } = req.body;
  const insertVocaItem = new vocasSchema({
    day,
    kor,
    eng,
    done,
  });
  insertVocaItem
    .save()
    .then(() => {
      res.json({ state: "ok" });
      console.log("잘 들어갔습니다.");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/vocas", (req, res) => {
  console.log(req.query);
});
app.get("/vocas/:day", (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
