const daySchema = require("./models/DaySchema");
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
  // db에서 데이터 긁어서 json으로 리턴
  res.json([
    {
      id: 1,
      day: 1,
    },
    {
      id: 2,
      day: 2,
    },
    {
      id: 3,
      day: 3,
    },
    {
      day: 4,
      id: 4,
    },
    {
      day: 5,
      id: 5,
    },
    {
      day: 6,
      id: 6,
    },
  ]);
});
app.post("/days", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
