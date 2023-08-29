const express = require("express");
const app = express();

const home = require("./routes/home"); // 라우트폴더 홈폴더의 index.js 를 읽어와줘
// 앱 세팅
app.set("views","./views");
app.set("view engine","ejs")


app.use("/",home); 

module.exports = app;