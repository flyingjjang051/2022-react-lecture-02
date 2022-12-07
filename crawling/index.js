const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const cors = require("cors");
app.use(cors());

app.set("port", process.env.PORT || 8081);
const PORT = app.get("port");

app.get("/", (req, res) => {
  res.send("hello express");
  // res.render();
  // res.json();
});

//ssr csr
app.get("/daum/news", (req, res) => {
  // 여기서 다음 뉴스에 가서 내용을 긁어오기
  // json으로 가공해서 내려보내주기
  // axios는 ajax 툴  fetch  promise
  axios.get("https://news.daum.net/").then(function (result) {
    //console.log(result.data);
    const returnList = [];
    const $ = cheerio.load(result.data); // 긁어온 html 에서 제이쿼리처럼 dom을 셀렉트 할 수 있음.
    const list = $(".list_newsissue").children("li");
    console.log("🚀 ~ file: index.js:25 ~ list", list);
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
// 동기 비동기
app.get("/daum/movie", async (req, res) => {
  // 크로미니움 (크롬의 개발 버전)
  const browser = await puppeteer.launch({
    //headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1900,
    height: 800,
  });
  await page.goto("https://movie.daum.net/main");
  await page.waitForSelector(".list_reserveranking");
  const content = await page.content("https://movie.daum.net/main");
  //console.log(content);
  const $ = cheerio.load(content);
  const list_reserveranking = $(".topmovie-slide .list_reserveranking").children("li");
  const list = [];
  //prettier-ignore
  list_reserveranking.each((idx, item) => {
    list.push({ 
      img: $(item).find(".poster_movie img").attr("src"), 
      title: $(item).find(".thumb_cont a").text(), 
      link: $(item).find(".poster_info a").attr("src"),
      info: {
        openDate: $(item).find(".poster_info a .list_info:nth-child(1) dd").text(),
        genre: $(item).find(".poster_info a .list_info:nth-child(2) dd").text().replaceAll("\n","").replace(/\s/g, ""),
        grade: $(item).find(".poster_info a .list_info:nth-child(3) dd").text().replaceAll("\n","").replace(/\s/g, ""),
        director: $(item).find(".poster_info a .list_info:nth-child(4) dd").text().replaceAll("\n","").replace(/\s/g, ""),
        mainRole: $(item).find(".poster_info a .list_info:nth-child(5) dd").text().replaceAll("\n","").replace(/\s/g, ""),
      }
    });
  });
  res.json(list);
});
//정규표현식 regular expression  (글자에서 맞는 패턴 찾기)
const txt = "  장    성   호  ";
console.log(txt.replace(/\s/g, ""));

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
