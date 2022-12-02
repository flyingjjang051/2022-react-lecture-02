const express = require("express");
const router = express.Router();
const subTitle = "대학소개는 개뿔";
const subVisualNo = "01";
const gnb = "gnb01";
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
  res.render("list", { subTitle: subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: subVisualNo, gnb: gnb });
});

module.exports = router;
