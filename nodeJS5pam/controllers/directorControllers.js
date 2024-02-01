const Director = require("../models/Director.js");

//@Create Director
//@route POST /api/directors

const createDirector = async (req, res) => {
  if (
    !req.body.movieDirector ||
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.dob ||
    !req.body.country
  ) {
    res.status(404).send("No data");
  }
  const directorius = new Director({
    movieDirector: req.body.movieDirector,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: req.body.dob,
    country: req.body.country,
  });
  const result = await directorius.save();
  res.status(200).send(result);
};

//@Get All directors
//@route GET /api/directors/all

const getAllDirectors = async (req, res) => {
  const directorFromDB = await Director.find();
  if (!directorFromDB) {
    res.status(404).send("no data");
    return;
  }
  res.status(200).json(directorFromDB);
};
//get FULL info about the director
const getFullInfoAboutDirector = async (req, res) => {
  const directorFromDB = await Director.find().populate(
    "movieDirector",
    "title year genre _id"
  );
  if (!directorFromDB) {
    res.status(400).send("no data");
    return;
  }
  res.status(200).json(directorFromDB);
};

//@Get director by id
//@route GET /api/directors/:id

const getDirectorByID = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("no data");
    return;
  }
  res.status(200).json(directorById);
};

//@Update director
//@route PUT /api/directors/:id

const updateDirector = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("no data");
    return;
  }
  directorById.firstname = req.body.firstname;
  directorById.lastname = req.body.lastname;
  const result = await directorById.save();
  res.status(200).send(result);
};
//@Delete director
//@route DELETE /api/directors/:id
const deleteDirector = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("no data");
    return;
  }
  const result = await Director.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};
//
module.exports = {
  createDirector,
  getAllDirectors,
  getDirectorByID,
  updateDirector,
  deleteDirector,
  getFullInfoAboutDirector,
};
