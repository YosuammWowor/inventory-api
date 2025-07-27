const { readFileSync, writeFileSync } = require("fs");

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

  return false;
};

const patchData_db = async (id, operation, amount) => {
  const datas = await getData_db();
  id = parseInt(id);

  for (let data of datas) {
    if (data.id === id) {
      const updatedData = data;

      // Checking variabel type
      if (typeof operation !== "string")
        return "Something wrong with 'operation'";
      if (typeof amount !== "number") return "Something wrong with 'amount'";

      if (operation.toLowerCase() === "increase") {
        // operation increase stock
        datas.forEach((data) => {
          if (data.id === id) data.stock += amount;
        });
      } else if (operation.toLocaleLowerCase() === "decrease") {
        // operation decrase stock
        datas.forEach((data) => {
          if (data.id === id) data.stock -= amount;
        });
      } else {
        return "Please choose between 'increase' or 'decrease'";
      }

      writeFileSync("./data/products.json", JSON.stringify(datas), "utf-8");

      return updatedData;
    }
  }

  return false;
};

module.exports = {
  getData_db,
  postData_db,
  putData_db,
  deleteData_db,
  patchData_db,
};
