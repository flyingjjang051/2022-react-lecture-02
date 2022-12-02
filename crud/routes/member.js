const express = require("express");
const router = express.Router();
const moment = require("moment");

// db (데이터 베이스)   // 회원가입 만들고 리스트 뿌려보기....
const subTitle = "회원";
const subVisualNo = "02";
const gnb = "gnb01";

const memberList = [];
let memberNo = 0;

router.get("/join", (req, res) => {
  res.render("./member/join", { subTitle: subTitle, contentsTitle: "회원가입", className: "member", subVisualNo: subVisualNo, gnb: gnb });
});
router.post("/join", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  memberList.push({ no: ++memberNo, id, password, name, phone, address, date: moment().format("YYYY-MM-DD hh:mm:ss") });
  res.redirect("/member/list");
});

router.get("/list", (req, res) => {
  const list = [...memberList];
  res.render("./member/list", { subTitle: subTitle, contentsTitle: "회원리스트", className: "member", subVisualNo: subVisualNo, gnb: gnb, list: list });
});

module.exports = router;
