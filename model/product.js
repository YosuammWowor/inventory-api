const { readFileSync, readFile, writeFileSync } = require("fs");
const { type } = require("os");

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

const putData_db = async (id, name, stock, price) => {
  const datas = await getData_db();
  id = parseInt(id);

  for (let data of datas) {
    if (id === data.id) {
      const newData = {
        id: id,
        name: name,
        stock: stock,
        price: price,
      };

      datas.forEach((data, index) => {
        if (data.id === id) {
          datas[index] = newData;
          // console.log(index);
        }
      });

      writeFileSync("./data/products.json", JSON.stringify(datas), "utf-8");

      return true;
    }
  }

  return false;
};

const deleteData_db = async (id) => {
  const datas = await getData_db();
  id = parseInt(id);

  for (let data of datas) {
    if (data.id === id) {
      const newData = datas.filter((data) => data.id !== id);
      newData.forEach((data, index) => (data.id = index + 1));

      writeFileSync("./data/products.json", JSON.stringify(newData), "utf-8");

      return data;
    }
  }

  // for (let i = 0; i < datas.length; i++) {
  //   if (datas[i].id === id) {
  //     const deletedData = datas[i];

  //     // datas.forEach((data, index) => )

  //     return deletedData;
  //   }
  // }

  return false;
};

module.exports = { getData_db, postData_db, putData_db, deleteData_db };
