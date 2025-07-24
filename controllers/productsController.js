const getData_db = require("../model/product");

const getData = async (req, res) => {
  const data = await getData_db();
  res.json(data);
};

const setHomepage = (req, res) => {
  res.send("<h1>Homepage - Welcome Adventure's 🌄</h1>");
};

module.exports = { setHomepage, getData };
