const mongoose = require("mongoose");
const MemberSchema = mongoose.Schema({
  no: Number,
  id: String,
  password: String,
  name: String,
  phone: String,
  address: String,
  date: Date,
});
const Members = mongoose.model("Member", MemberSchema);
