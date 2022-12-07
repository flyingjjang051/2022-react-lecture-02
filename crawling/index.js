const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
app.use(cors());

app.set("port", process.env.PORT || 8081);
const PORT = app.get("port");

app.get("/", (req, res) => {
  res.send("hello express");
  // res.render();
  // res.json();
});
app.get("/daum/news", (req, res) => {
  // 여기서 다음 뉴스에 가서 내용을 긁어오기
  // json으로 가공해서 내려보내주기
  // axios는 ajax 툴  fetch  promise
  axios.get("https://news.daum.net/").then(function (result) {
    //console.log(result.data);
    const returnList = [];
    const $ = cheerio.load(result.data); // 긁어온 html 에서 제이쿼리처럼 dom을 셀렉트 할 수 있음.
    const list = $(".list_newsissue").children("li");
    list.each((idx, item) => {
      returnList.push({
        title: $(item).find("a").text().replaceAll("\n", "").trim(),
        img: $(item).find("a img").attr("src"),
        link: $(item).find("a").attr("href"),
      });
    });
    console.log(returnList);
    res.json(returnList);
  });
});
app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
