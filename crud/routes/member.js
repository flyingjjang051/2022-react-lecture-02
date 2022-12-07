//몽구스

const express = require("express");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// db (데이터 베이스)   // 회원가입 만들고 리스트 뿌려보기....
const subTitle = "회원";
const subVisualNo = "02";
const gnb = "gnb01";

const memberList = [];
let memberNo = 0;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "frontend-2022", //dbName으로 설정하면 된다.
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("db연결 성공");
});

//
const members = new mongoose.Schema({
  no: "number",
  id: "string",
  password: "string",
  name: "string",
  phone: "string",
  address: "string",
  date: "date",
});

const Members = mongoose.model("member", members);

const newMembers = new Members({
  no: 2,
  id: "jjang052",
  password: "1234",
  name: "쨩난다",
  phone: "010-2582-2242",
  address: "지구 어디즘....",
  date: new Date(),
});
newMembers.save((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("멤버 추가 성공");
    //res.redirect("/member/list");
  }
});

router.get("/join", (req, res) => {
  res.render("./member/join", { subTitle: subTitle, contentsTitle: "회원가입", className: "member", subVisualNo: subVisualNo, gnb: gnb });
});
router.post("/join", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  // memberList.push({ no: ++memberNo, id, password, name, phone, address, date: moment().format("YYYY-MM-DD hh:mm:ss") });
  //prettier-ignore
  const newMembers = new Members({ 
    no: 2, 
    id: id, 
    password: password, 
    name: name, 
    phone: phone, 
    address: address, 
    date: new Date() 
  });
  newMembers.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      //console.log("멤버 추가 성공");
      res.redirect("/member/list");
    }
  });
});

router.get("/list", (req, res) => {
  //const list = [...memberList];
  Members.find((err, members) => {
    if (err) {
      console.log(err);
    } else {
      res.render("./member/list", { subTitle: subTitle, contentsTitle: "회원리스트", className: "member", subVisualNo: subVisualNo, gnb: gnb, list: members });
    }
  });
});

module.exports = router;
