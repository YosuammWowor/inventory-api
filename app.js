const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Homepage - Welcome Adventure's 🌄</h1>");
});

app.listen("3000", (req, res) => {
  console.log("Server running on http://localhost:3000");
});
