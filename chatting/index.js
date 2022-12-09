const path = require("path");
const http = require("http");
const moment = require("moment");
const socketIO = require("socket.io");
const express = require("express");
const app = express(); // 웹서버 만들때
const socketServer = http.createServer(app);
const io = socketIO(socketServer);
app.set("port", process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, "/public")));
const PORT = app.get("port");

// client에서 접속 대기중
//console.log(moment(Date.now()).format("A hh:mm"));
io.on("connection", (socket) => {
  console.log(socket);
  socket.on("yaho", (clientData) => {
    io.emit("serverYaho", { name: clientData.name, msg: clientData.msg, time: moment(Date.now()).format("A hh:mm") });
  });
  socket.on("enter", (clientData) => {
    const { name, gender, age } = clientData;
    //io.emit("serverEnter", { name: name });
    io.emit("serverEnter", { name: clientData.name });
  });

  socket.on("disconnect", (clientData) => {
    console.log("나갔음");
    const { name, gender, age } = clientData;
    io.emit("serverEnter", { name: clientData.name });
  });
});
app.get("/chatting", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/chatting.html"));
});
app.get("/", (req, res) => {
  res.send("hello express");
});

socketServer.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
