const connectingDB = require("./config/db.js");
const express = require("express");
require("dotenv").config();
connectingDB();

const app = express();
app.use(express.json());

//port
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port: ${process.env.PORT}`);
});
