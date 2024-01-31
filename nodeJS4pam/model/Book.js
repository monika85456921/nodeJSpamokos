const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  title: {
    type: String,
    required: [true, "please add title"],
  },
  year: {
    type: Number,
    required: [true, "please add year"],
  },
  pages: {
    type: Number,
    required: [true, "please add pages"],
  },
  genre: {
    type: String,
    required: [true, "please add genre"],
  },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
