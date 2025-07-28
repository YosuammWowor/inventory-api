const express = require("express");
const route = express.Router();

const {
  setHomepage,
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
  patchData,
  errURL,
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

route.get("/*splat", (req, res) => {
  errURL(res);
});

route.post("/products", (req, res) => {
  postData(req, res);
});

route.post("/*splat", (req, res) => {
  errURL(res);
});

route.put("/products/:id", (req, res) => {
  putData(req, res);
});

route.put("/*splat", (req, res) => {
  errURL(res);
});

route.delete("/products/:id", (req, res) => {
  deleteData(req, res);
});

route.patch("/products/:id/stock", (req, res) => {
  patchData(req, res);
});

module.exports = route;
