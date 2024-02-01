const connectingDB = require("./config/db.js");
const express = require("express");
require("dotenv").config();
connectingDB();

const app = express();
app.use(express.json());

//directors imports
const {
  createDirector,
  getAllDirectors,
  getDirectorByID,
  updateDirector,
  deleteDirector,
  getFullInfoAboutDirector,
} = require("./controllers/directorControllers.js");
app.post("/api/directors", createDirector);
app.get("/api/directors", getAllDirectors);
app.get("/api/directors/:id", getDirectorByID);
app.put("/api/directors/:id", updateDirector);
app.delete("/api/directors/:id", deleteDirector);
app.get("/api/directors/full", getFullInfoAboutDirector);
//movies imports
const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("./controllers/moviesControllers.js");
app.post("/api/movies", createMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:id", getMovieById);
app.put("/api/movies/:id", updateMovie);
app.delete("/api/movies/:id", deleteMovie);
//port
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port: ${process.env.PORT}`);
});
