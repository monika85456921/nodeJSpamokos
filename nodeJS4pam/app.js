const connectingToDB = require("./config/db");
const express = require("express");
const connectToDB = require("./config/db");
const { json } = require("express");

require("dotenv").config();

connectToDB();
const app = express();

app.use(express.json());
//authoriai
const {
  createAuthor,
  getAuthorWithBooks,
} = require("./controllers/authorsControllers");

app.post("/api/authors", createAuthor);
app.get("/api/authors/all", getAuthorWithBooks);
//books exports
const {
  createBook,
  getAllBooks,
  getFullInfoAboutBook,
} = require("./controllers/booksControllers");

app.post("/api/books", createBook);
app.get("/api/books", getAllBooks);
app.get("/api/books/all", getFullInfoAboutBook);
//port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
