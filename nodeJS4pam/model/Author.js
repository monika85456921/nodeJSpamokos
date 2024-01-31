const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "enter authors first name"],
  },
  lastname: {
    type: String,
    required: [true, "enter author last name"],
  },
  about: {
    type: String,
    required: [true, "enter info"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

authorSchema.virtual("books", {
  ref: "Book",
  localField: "_id",
  foreignField: "bookAuthor",
});
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
