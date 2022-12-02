const express = require("express");
const router = express.Router();
const subTitle = "연구";
const subVisualNo = "03";
const gnb = "gnb03";
router.get("/institute", (req, res) => {
  // res.send();  일반 html로 내보내기
  // res.json();  json으로 내보내기
  // res.render();  ejs 내보내기
  res.render("institute", { subTitle: subTitle, contentsTitle: "대학부설연구소", className: "department", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/bk21", (req, res) => {
  res.render("bk21", { subTitle: subTitle, contentsTitle: "BK21+교육연구단", className: "bk21", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/business", (req, res) => {
  res.render("business", { subTitle: subTitle, contentsTitle: "주요연구사업단", className: "business", subVisualNo: subVisualNo, gnb: gnb });
});
module.exports = router;
