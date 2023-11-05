const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "hahaha" },
  auth: { type: String, default: "hahaha" },
  decription: { type: String, default: "hahaha" },
  title: { type: String, default: "hahaha" },
});

module.exports = mongoose.model("Course", Course);
