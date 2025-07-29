const {
  getData_db,
  postData_db,
  putData_db,
  deleteData_db,
  patchData_db,
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

  const datas = await getData_db();

  if (id > datas.length || id <= 0 || isNaN(id)) {
    return res.json({
      message: "No Items ID available...",
    });
  }

  res.json(datas[parseInt(id) - 1]);
};

const postData = async (req, res) => {
  if (req.body === undefined)
    return res.json({ message: "Please, follow the instructions." });

  const { name, stock, price } = req.body;
  let isGood = true;

  if (
    typeof name !== "string" ||
    !Number.isInteger(stock) ||
    !Number.isInteger(price)
  ) {
    isGood = false;
  }

  const message_db = await postData_db(name, stock, price);

  res.json({
    message:
      message_db && isGood
        ? "Items Successfully Added😆"
        : "Items Failed Added😔",
    data:
      message_db && isGood
        ? message_db
        : "Something went wrong, please check your input...",
  });
};

const putData = async (req, res) => {
  const { id } = req.params;
  let isGood = true;

  const datas = await getData_db();

  if (id > datas.length || id <= 0 || isNaN(id)) {
    return res.json({
      message: "No Items ID available...",
    });
  }

  if (req.body === undefined)
    return res.json({ message: "Please, follow the instructions." });

  const { name, stock, price } = req.body;

  if (
    typeof name !== "string" ||
    !Number.isInteger(stock) ||
    !Number.isInteger(price)
  ) {
    isGood = false;
  }

  const message_db = await putData_db(
    parseInt(req.params.id),
    name,
    stock,
    price
  );

  res.json({
    message:
      message_db && isGood
        ? "Products data updated successfully!🎁"
        : "Sorry, products data updated failed!😔",
    data: message_db
      ? message_db
      : "Something went wrong, please check your input...",
  });
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  const datas = await getData_db();

  if (id <= 0 || id > datas.length || isNaN(id)) {
    return res.json({ message: "No Items ID available..." });
  }

  const message_db = await deleteData_db(id);

  res.json({
    message: message_db
      ? "Product successfully deleted!🙌"
      : "Sorry, product failed deleted😔",
    items: message_db ? message_db : "No items found...",
  });
};

const patchData = async (req, res) => {
  const { operation, amount } = req.body;

  const checkOperation =
    typeof operation === "string"
      ? operation.toLowerCase() === "increase" ||
        operation.toLowerCase() === "decrease"
      : false;
  const checkAmount = typeof amount === "number";

  const message_db = await patchData_db(req.params.id, operation, amount);

  res.json({
    message:
      message_db && checkOperation && checkAmount
        ? "Product successfully updated📦"
        : "Sorry, product data failed updated😔",
    data: message_db ? message_db : "No items found...",
  });
};

const errURL = (res) => {
  res.json({ message: "Something went wrong, please check again ur URL..." });
};

module.exports = {
  setHomepage,
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
  patchData,
  errURL,
};
