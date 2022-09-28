const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor levantado");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});

app.post("/login", (req, res) => {
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.post("/register", (req, res) => {
  res.redirect("/");
});
