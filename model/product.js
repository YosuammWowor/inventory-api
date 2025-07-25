const { readFileSync, readFile, writeFileSync } = require("fs");

const getData_db = async () => {
  const data = await readFileSync("./data/products.json", "utf-8");
  return JSON.parse(data);
};

const postData_db = async (name, stock, price) => {
  const getData = await getData_db();
  const id = getData.length + 1;

  let newData = `,{
    "id": ${id},
    "name": "${name}",
    "stock": ${stock},
    "price": ${price}
  }
]`;

  newData = JSON.stringify(getData).replace("]", newData);

  writeFileSync("./data/products.json", newData, "utf-8");

  return "Items Successfully Added😆";
};

module.exports = { getData_db, postData_db };
