/*
node 里面有一个http的模块，用来操作网络服务相关功能
但是http使用起来比较复杂
所以有人进行了封装，express就是其中优秀的一个封装
*/

// 引入 express
const express = require("express");
// 创建应用对象
const app = express();
const fs = require("fs");
const cors = require("cors");

// 设置模板的存放位置
app.set("views", `${__dirname}/views`);
// 设置模板引擎
app.set("view engine", "ejs");
app.set("view option", {});

// 配置，允许浏览器跨域访问
app.use(cors());

// 请求：request
// 响应：response

// 当访问 / 的时候，的处理方式
app.get("/", (req, res) => {
  // ...
  res.send("<h1>Hello World!</h1>");
});

app.get("/green-box", (req, res) => {
  let htmlText = fs.readFileSync("./a.html", "utf-8");
  res.send(htmlText);
});

app.get("/news-list", (req, res) => {
  let news = [
    { id: 1, title: "Vue3发布啦1111" },
    { id: 2, title: "神十四上天啦" },
    { id: 3, title: "疫情解放啦" },
  ];
  let liHtml = "";
  for (let i = 0; i < news.length; i++) {
    liHtml += `<li>${news[i].title}</li>`;
  }
  console.log(liHtml);
  let htmlText = fs.readFileSync("./b.html", "utf-8");
  htmlText = htmlText.replace("$NEWS_LI$", liHtml);
  res.send(htmlText);
});

app.get("/news-list2", (req, res) => {
  let news = [
    { id: 1, title: "Vue3发布啦1111" },
    { id: 2, title: "神十四上天啦" },
    { id: 3, title: "疫情解放啦" },
  ];
  res.render("news-list", { news });
});

app.get("/new-list-fen", (req, res) => {
  res.render("new-list-fen");
});

app.get("/news", (req, res) => {
  let news = [
    { id: 1, title: "Vue3发布啦1111" },
    { id: 2, title: "神十四上天啦" },
    { id: 3, title: "疫情解放啦" },
  ];
  res.send(news);
});

// 服务监听 3000 端口
app.listen(3000, () => {
  console.log(`服务启动成功拉！`);
});
