const getData_db = require("../model/product");

const setHomepage = (req, res) => {
  res.send("<h1>Homepage - Welcome Adventure's 🌄</h1>");
};

const getData = async (req, res) => {
  const data = await getData_db();
  res.json(data);
};

const getDataById = async (req, res) => {
  const { id } = req.params;

  // console.log(typeof parseInt(id));

  const datas = await getData_db();
  for (let data of datas) {
    if (data.id === parseInt(id)) return res.json(data);
  }

  // If no items get
  res.json({
    message: "No Items available",
  });
};

module.exports = { setHomepage, getData, getDataById };
