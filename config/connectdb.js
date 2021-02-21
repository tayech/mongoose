const mongoose = require("mongoose");
const config = require("config");
const connectDB = async () => {
  try {
    mongoose.connect(
      config.get("MONGI_URI"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("mongoose is connected")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;