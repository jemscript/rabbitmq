const mongoose = require('mongoose');
const dataBase = process.env.DB;

mongoose
  .connect(dataBase)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });
