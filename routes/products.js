const express = require("express");
const route = express.Router();

const {
  getData,
  setAboutPage,
  setHomePage,
} = require("../controllers/productsController");

route.get("/", (req, res) => {
  setHomePage(req, res);
});

route.get("/products", (req, res) => {
  getData(req, res);
});

route.get("/about", (req, res) => {
  setAboutPage(req, res);
});

module.exports = route;
