const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "hahaha" },
  auth: { type: String, default: "hahaha" },
  decription: { type: String, default: "hahaha" },
  title: { type: String, default: "hahaha" },
  slug: { type: String, slug:'name', unique:true},
},
{
  timestamps:true
});

module.exports = mongoose.model("Course", Course);
