const express = require("express");
const route = express.Router();

const {
  setHomepage,
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
} = require("../controllers/productsController");

route.get("/", (req, res) => {
  setHomepage(req, res);
});

route.get("/products", (req, res) => {
  getData(req, res);
});

route.get("/products/:id", (req, res) => {
  getDataById(req, res);
});

route.post("/products", (req, res) => {
  postData(req, res);
});

route.put("/products/:id", (req, res) => {
  putData(req, res);
});

route.delete("/products/:id", (req, res) => {
  deleteData(req, res);
});

module.exports = route;
