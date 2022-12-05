const express = require("express");
const router = express.Router();
const userSchema = require("../models/UserSchema");

router.get("/join", (req, res) => {
  // template engine
  // 서버에서 테이터를 실어 보내다
  res.render("./user/join");
});
// db선택 mongo
// 연결을 한다.
// 밀어넣기
// 결과받기
router.post("/join", (req, res) => {
  // post는 클라이언트에서 넘어오는 데이터 받아서 처리하고 그결과를 리턴해주는 곳이다.
  const id = req.body.id;
  const password = req.body.password;
  const phone = req.body.phone;
  const name = req.body.name;
  const address = req.body.address;
  //const gender = req.body.gender;
  //const sido = req.body.sido;
  //const interest = req.body.interest;

  const insertUser = new userSchema({
    id: id,
    password: password,
    name: name,
    phone: phone,
    address: address,
  });
  //console.log(insertUser.save());
  insertUser
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      //console.log(err);
      res.send(`<script>
                alert("알 수 없는 오류로 회원가입이 되지 않았습니다."); 
                location.href="/user/join";
                </script>`);
    });
  //res.send("잘 처리되었습니다.");
});

router.get("/list", (req, res) => {
  res.render("./user/list");
});

module.exports = router;
