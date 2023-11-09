const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, default: "hahaha" },
  email: { type: String, default: "hahaha" },
  password: { type: String, default: "hahaha" },
  slug: { type: String, slug:'name', unique:true},
},
{
  timestamps:true
});

module.exports = mongoose.model("User", User);