const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  // movieDirector: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Movie",
  // },
  firstname: {
    type: String,
    required: [true, "enter name"],
  },
  lastname: {
    type: String,
    required: [true, "enter last name"],
  },
  dob: {
    type: Number,
    required: [true, "enter DOB"],
  },
  country: {
    type: String,
    required: [true, "enter country"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Director = mongoose.model("Director", directorSchema);
module.exports = Director;
