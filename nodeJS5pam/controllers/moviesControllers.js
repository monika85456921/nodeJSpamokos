const Movie = require("../models/Movie.js");

//@ Create Movie
//@route POST /api/movies

const createMovie = async (req, res) => {
  if (!req.body.title || !req.body.year || !req.body.genre) {
    resizeBy.status(404).send("No movie found");
  }
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
  });
  const result = await movie.save();
  res.status(200).send(result);
};

//@get All movies
//@route GET /api/movies/all

const getAllMovies = async (req, res) => {
  const movieFromDB = await Movie.find();
  if (!movieFromDB) {
    res.status(404).send("no data");
    return;
  }
  res.status(200).json(movieFromDB);
};
//@Get movie by Id
//@route GET /api/movies/:id
const getMovieById = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("no data");
    return;
  }
  res.status(200).json(movieById);
};
//@update movie
//@route PUT /api/movies/:id

const updateMovie = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("no data");
    return;
  }
  movieById.title = req.body.title;
  const result = await movieById.save();
  res.status(200).send(result);
};
//@delete movie
//@route DELETE /api/movies/:id

const deleteMovie = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("no data");
    return;
  }
  const result = await Movie.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};
//
module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
