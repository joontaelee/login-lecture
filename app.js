"use strict";
//모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./app/src/routes/home"); // 라우트폴더 홈폴더의 index.js 를 읽어와줘
// 앱 세팅
app.set("views","./app/src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));



app.use("/",home); 

module.exports = app;