const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get       查询
// app.post      新增
// app.put       修改
// app.delete    删除

// RESTFul 风格

// app.head
// app.option

// 通信协议
// TCP/IP
// HTTP 无状态

// 请求
// 响应

// 请求报文、响应报文
// 行、头、体

// http://127.0.0.1:3000/news

app.get("/get1", (req, res) => {
  let username = req.query.username;
  res.send("Hello World " + username);
});

app.post("/post1", (req, res) => {
  res.send("Hello Post");
});

app.post("/post2", (req, res) => {
  console.log(req.body);
  res.send("Hello Post");
});

app.listen(3000, () => {
  console.log("启动成功拉！");
});
