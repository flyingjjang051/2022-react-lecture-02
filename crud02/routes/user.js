const express = require("express");
const router = express.Router();
const userSchema = require("../models/UserSchema");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
router.use(session({ secret: "비밀코드jjang051", resave: true, saveUninitialized: false }));
router.use(passport.initialize());
router.use(passport.session());
// 로그인 전략 짜기....
passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "password",
      session: true,
      passReqToCallback: false,
    },
    async (id, password, done) => {
      try {
        const userInfo = await userSchema.findOne({ id: id, password: password }).exec();
        if (userInfo) {
          console.log("로그인 성공", userInfo);

          return done(null, userInfo);
        } else {
          console.log("로그인 실패");
          return done(null, false, { message: "아이디 또는 패스워드를 확인해 주세요." });
        }
      } catch {
        return done(null, false, { message: "아이디 또는 패스워드를 확인해 주세요." });
      }
    }
  )
);
passport.serializeUser((user, done) => {
  console.log("🚀 ~ file: user.js:34 ~ passport.serializeUser ~ user", user);

  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  userSchema.findOne({ id: id }, (err, result) => {
    console.log("🚀 ~ file: user.js:40 ~ userSchema.findOne ~ result", result);
    done(null, result);
  });
});

router.get("/join", (req, res) => {
  res.render("./user/join");
});

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

router.get("/info", isLogged, async (req, res) => {
  console.log(req);
  res.render("./user/info", { userInfo: req.user });
});

// async / await
/*
router.post("/login", async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  try {
    const userInfo = await userSchema.findOne({ id: id, password: password }).exec();
    res.render("./index", { user: userInfo.name, id: userInfo.id });
  } catch {
    res.send(`<script>
    alert("id 또는 password를 확인해 주세요."); 
    location.href="/user/login";
    </script>`);
  }
});
*/

// passport로 로그인을 하면 자동으로 req.user 정보가 생긴다.
router.post("/login", passport.authenticate("local", { successRedirect: "/user/info", failureRedirect: "/user/login" }), (req, res) => {});

router.get("/list", isLogged, (req, res) => {
  res.render("./user/list");
});
router.get("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.redirect("/");
  }
});
// 미들웨어
function isLogged(req, res, next) {
  // passport에서 로그인 성공을 하면 자동으로 req.user를 생성한다.
  if (req.user) {
    next();
  } else {
    res.send(`<script>alert("로그인 먼저 하셔야 합니다."); location.href="/user/login";</script>`);
  }
}

module.exports = router;
