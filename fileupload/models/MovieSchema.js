const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: String,
  date: String,
  genre: String,
  summary: "string",
  point: Number,
  poster: {
    type: String,
    // require: true,
    // unique: true,
  },
  //versionKey:false,
});
// collection movies
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
