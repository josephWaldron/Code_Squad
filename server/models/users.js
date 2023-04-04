const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  java: {
    type: Number,
    default: 0,
  },
  python: {
    type: Number,
    default: 0,
  }, //add more fields here and chang the values in the function
  sql: {
    type: Number,
    default: 0,
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
