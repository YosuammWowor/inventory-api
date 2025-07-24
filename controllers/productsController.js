const getData_db = require("../model/product");

const getData = async (req, res) => {
  const data = await getData_db();
  res.json({ datas: { data } });
};

const setAboutPage = (req, res) => {
  res.send("<h1>About Page</h1>");
};

const setHomePage = (req, res) => {
  res.send("<h1>Home Page</h1>");
};

module.exports = { getData, setAboutPage, setHomePage };
