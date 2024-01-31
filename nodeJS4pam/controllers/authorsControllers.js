const Author = require("../model/Author");

//CREATE Author
//@route POST /api/authors

const createAuthor = async (req, res) => {
  if (!req.body.firstname || !req.body.lastname || !req.body.about) {
    res.status(404).send("Fill inputs");
  }

  const author = new Author({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    about: req.body.about,
  });
  const result = await author.save();
  res.status(200).send(result);
};

//@route GET /api/books/fullData

const getAuthorWithBooks = async (req, res) => {
  const authorsWithBooks = await Author.aggregate([
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "bookAuthor",
        as: "books",
      },
    },
  ]);
  if (!authorsWithBooks) {
    res.status(400).send("Author not found");
    return;
  }
  res.status(200).json(authorsWithBooks);
};

module.exports = { createAuthor, getAuthorWithBooks };
