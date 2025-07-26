const {
  getData_db,
  postData_db,
  putData_db,
  deleteData_db,
} = require("../model/product");

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

const postData = async (req, res) => {
  const { name, stock, price } = req.body;

  const message_db = await postData_db(name, stock, price);

  res.json({
    message: message_db ? message_db : "Items Failed Added😔",
    items: { name, stock, price },
  });
};

const putData = async (req, res) => {
  const { name, stock, price } = req.body;

  const message_db = await putData_db(req.params.id, name, stock, price);

  res.json({
    message: message_db
      ? "Products data updated successfully!🎁"
      : "Sorry, products data updated failed!😔",
    id: req.params.id,
    data: { name, stock, price },
  });
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  const message_db = await deleteData_db(id);

  res.json({
    message: message_db
      ? "Product successfully deleted!🙌"
      : "Sorry, product failed deleted😔",
    items: message_db ? message_db : "No items found...",
  });
};

module.exports = {
  setHomepage,
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
};
