const mongoose = require("mongoose");

const PortfolioSchema = mongoose.Schema({
  title: String,
  category: String,
  summary: "string",
  poster: {
    type: String,
    require: true,
  },
});
const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
module.exports = Portfolio;
