const express = require("express");
const router = express.Router();
const subTitle = "전공안내";
const subVisualNo = "02";
const gnb = "gnb02";
router.get("/department", (req, res) => {
  res.render("department", { subTitle: subTitle, contentsTitle: "학부", className: "department", subVisualNo: subVisualNo, gnb: gnb });
});
router.get("/graduate", (req, res) => {
  res.render("graduate", { subTitle: subTitle, contentsTitle: "대학원", className: "graduate", subVisualNo: subVisualNo, gnb: gnb });
});
module.exports = router;
