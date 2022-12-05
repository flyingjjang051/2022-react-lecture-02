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
router.post("/join", async (req, res) => {
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
  // inserUser.save()는 Pormise를 리턴한다. async/await
  /*
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
    */
  try {
    const result = await insertUser.save();
    console.log(result);
    res.redirect("/");
  } catch {
    res.send(`<script>
                alert("알 수 없는 오류로 회원가입이 되지 않았습니다."); 
                location.href="/user/join";
                </script>`);
  }
});

router.get("/login", (req, res) => {
  res.render("./user/login");
});

// async / await
router.post("/login", async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  //console.log(id, "===", password);
  // find 는 다 찾기 배열을 리턴하다.
  // findOne은 하나만 찾기 오브젝트를 리턴한다.
  try {
    const userInfo = await userSchema.findOne({ id: id, password: password }).exec();
    res.render("./index", { user: userInfo.name });
  } catch {
    res.send(`<script>
    alert("id 또는 password를 확인해 주세요."); 
    location.href="/user/login";
    </script>`);
  }
  /*
  isLogged
    .then((result) => {
      console.log("result===", result);
      //if (result.length > 0) {
      res.render("./index", { user: result.name });
      //}
    })
    .catch((err) => {
      console.log(err);
    });
    */
});

router.get("/list", (req, res) => {
  res.render("./user/list");
});

module.exports = router;
