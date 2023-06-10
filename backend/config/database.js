const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    .then((data) => {
      console.log(
        `MongoDB successfully connected with server ${data.connection.host}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
