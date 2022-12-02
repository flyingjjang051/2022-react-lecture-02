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
  const list = [
    { no: 1, writer: "관리자", subject: "서버에서 내려가는 제목입니다01.", date: "2022-12-02" },
    { no: 2, writer: "교장", subject: "날씨가 춥습니다.", date: "2022-12-02" },
    { no: 3, writer: "교감", subject: "얼어죽을거 같아요.", date: "2022-12-02" },
    { no: 4, writer: "학과장", subject: "무릎이 시려요", date: "2022-12-02" },
    { no: 5, writer: "당번", subject: "집에가고 싶어요", date: "2022-12-02" },
    { no: 6, writer: "학생회장", subject: "서버에서 내려가는 제목입니다.", date: "2022-12-02" },
    { no: 7, writer: "지나가는 사람", subject: "서버에서 내려가는 제목입니다.", date: "2022-12-02" },
    { no: 8, writer: "관리자01", subject: "서버에서 내려가는 제목입니다.", date: "2022-12-02" },
    { no: 9, writer: "관리자02", subject: "서버에서 내려가는 제목입니다.", date: "2022-12-02" },
    { no: 10, writer: "관리자03", subject: "서버에서 내려가는 제목입니다.", date: "2022-12-02" },
  ];
  res.render("list", { subTitle: subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: subVisualNo, gnb: gnb, list: list });
});
router.get("/write", (req, res) => {
  res.render("write", { subTitle: subTitle, contentsTitle: "공지사항", className: "notice", subVisualNo: subVisualNo, gnb: gnb });
});
router.post("/write", (req, res) => {
  //1. 넘어온 값을 받아야 한다.
  //2. 결과처리...
  console.log(req.body.writer);
  console.log(req.body.subject);
  console.log(req.body.contents);
  res.redirect("/write");
});

module.exports = router;
