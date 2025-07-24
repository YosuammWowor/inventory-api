const express = require("express");
const route = express.Router();

const { setHomepage, getData } = require("../controllers/productsController");

route.get("/", (req, res) => {
  setHomepage(req, res);
});

route.get("/products", (req, res) => {
  getData(req, res);
});

module.exports = route;
