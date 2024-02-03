const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected : ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
    });
};

module.exports = connectDatabase;
