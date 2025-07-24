const express = require("express");
const app = express();

const route = require("./routes/products");

app.use("/", route);

app.listen("3000", () => {
  console.log("Server running on http://localhost:3000");
});
