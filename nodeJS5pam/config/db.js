const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`Connected to database: ${connecting.connection.host}`);
  } catch (error) {
    console.log("Couldn't connect ", error);
  }
};

module.exports = connectToDB;
