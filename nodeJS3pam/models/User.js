//https://mongoosejs.com/docs/guide.html

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please your username"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    role: {
      type: String,
      default: "Simple",
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("User", userSchema);
