const express = require("express");
const moment = require("moment");
const router = express.Router();

const subTitle = "대학소개는 개뿔";
const subVisualNo = "01";
const gnb = "gnb01";

let boardList = [];
let boardNo = 0;

// db (데이터 베이스)

router.get("/greeting", (req, res) => {
  res.render("greeting", { subTitle: subTitle, contentsTitle: "학장인사말", className: "greeting", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/history", (req, res) => {
  res.render("history", { subTitle: subTitle, contentsTitle: "연혁", className: "history", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/organization", (req, res) => {
  res.render("organization", { subTitle: subTitle, contentsTitle: "조직 및 행정안내", className: "organization", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/students", (req, res) => {
  res.render("students", { subTitle: subTitle, contentsTitle: "학생회 및 동아리", className: "students", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/location", (req, res) => {
  res.render("location", { subTitle: subTitle, contentsTitle: "오시는 길", className: "location", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/list", (req, res) => {
  const list = [...boardList];
  res.render("list", { subTitle: subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: subVisualNo, gnb: gnb, list: list });
});
router.get("/write", (req, res) => {
  res.render("write", { subTitle: subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: subVisualNo, gnb: gnb });
});
router.post("/write", (req, res) => {
  //1. 넘어온 값을 받아야 한다.
  //2. 결과처리...
  //console.log(req.body.writer);
  //console.log(req.body.subject);
  //console.log(req.body.contents);
  //console.log(req.body);
  //req.query  주소?writer=장성호
  //req.params  주소/장성호
  boardList.push({ no: ++boardNo, writer: req.body.writer, subject: req.body.subject, date: moment().format("YYYY MM DD - hh : mm : ss") });
  res.redirect("/about/list");
});
console.log(moment().format("YYYY MM DD - hh : mm : ss"));
module.exports = router;
