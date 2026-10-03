const express = require("express"); //common js
const path = require("path"); //commonjs
require("dotenv").config();

const app = express(); // app express
const port = process.env.PORT || 8888; // port hard code
const hostname = process.env.HOST_NAME || "localhost";

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file

app.use(express.static(path.join(__dirname, "public")));

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! with nodemon ");
});
app.get("/abc", (req, res) => {
  res.send("check ABC");
});
app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
