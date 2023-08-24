const express = require("express");
const app = express();
const mime = {};

app.use(express.static("public"));

app.set("view engine", "ejs");

console.log("server start");

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000);
