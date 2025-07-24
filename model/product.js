const { readFileSync } = require("fs");

// Fungsi untuk mengambil data dalam database/lokal
const getData_db = async () => {
  const data = await readFileSync("./data/products.json", "utf-8");
  return JSON.parse(data);
};

module.exports = getData_db;
