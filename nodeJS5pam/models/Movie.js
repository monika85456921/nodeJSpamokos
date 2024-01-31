const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "enter the title"],
  },
  year: {
    type: Number,
    required: [true, "enter release date"],
  },
  genre: {
    type: [String],
    required: [true, "enter genre"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// movieSchema.virtual("director",{
//   ref:"Director",
//   localField:_id,
  
// })
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
