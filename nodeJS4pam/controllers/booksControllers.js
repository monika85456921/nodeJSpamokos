const Book = require("../model/Book");

//CREATE Book
//@route POST /api/books

const createBook = async (req, res) => {
  if (
    !req.body.bookAuthor ||
    !req.body.title ||
    !req.body.year ||
    !req.body.pages ||
    !req.body.genre
  ) {
    res.status(404).send("No data");
  }
  //paziureti ar yra ta knyga
  const existingBook = await Book.findOne({ title: req.body.title });
  if (existingBook) {
    return res.status(409).send("Book already exists in the data base");
  }

  const book = await Book.create({
    bookAuthor: req.body.bookAuthor,
    title: req.body.title,
    year: req.body.year,
    pages: req.body.pages,
    genre: req.body.genre,
  });
  res.status(200).json(book);
};

//Get ALL Book
//@route GET /api/books

const getAllBooks = async (req, res) => {
  const booksFromDB = await Book.find();
  if (!booksFromDB) {
    res.status(400).send("no data");
  }
  res.status(200).json(booksFromDB);
};

//Get FULL info about the book
const getFullInfoAboutBook = async (req, res) => {
  const booksFromDB = await Book.find().populate(
    "bookAuthor",
    "firstname lastname about id date"
  );
  if (!booksFromDB) {
    res.status(400).send("no data");
    return;
  }
  res.status(200).json(booksFromDB);
};


//exports
module.exports = { createBook, getAllBooks, getFullInfoAboutBook };
