const express = require("express");
const router = express.Router();

router.get("/join", (req, res) => {
  // template engine
  // 서버에서 테이터를 실어 보내다
  res.render("./user/join");
});

router.post("/join", (req, res) => {
  // post는 클라이언트에서 넘어오는 데이터 받아서 처리하고 그결과를 리턴해주는 곳이다.
  const id = req.body.id;
  const password = req.body.password;
  const phone = req.body.phone;
  const address = req.body.address;
  console.log("form 태그에 있는 action에 적힌 주소로 데이터 넘어옴");
  console.log("password===", password);
  console.log("id===", id);
  console.log("phone===", phone);
  console.log("address===", address);
  res.render("./user/join");
});

router.get("/list", (req, res) => {
  res.render("./user/list");
});

module.exports = router;
