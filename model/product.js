const { readFileSync } = require("fs");

const getData_db = async () => {
  const data = await readFileSync("./data/products.json", "utf-8");
  return JSON.parse(data);
};

module.exports = getData_db;
