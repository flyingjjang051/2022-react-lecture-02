// console.log("hello node");

const http = require("http"); // require 필요한 모듈을 들고 오기
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url === "/") {
    res.write("<h1>안녕하세요. 처음 만들어본 서버입니다.</h1>");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>여기는 about 페이지 입니다.</h1>");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");
    res.end();
  } else if (req.url === "/portfolio") {
    res.write("<h1>여기는 portfolio 페이지 입니다.</h1>");
    res.write("<a href='/about'>about</a><a href='/portfolio'>portfolio</a>");
    res.end();
  }
});
server.listen(8081);
server.on("listening", () => {
  console.log("서버가 8080에서 대기 중입니다.");
});
