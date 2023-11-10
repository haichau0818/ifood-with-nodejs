const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, default: "User 1" },
  email: { type: String, default: "user@gmail.com" },
  password: { type: String, default: "1" },
  slug: { type: String, slug:'name', unique:true},
},
{
  timestamps:true
});

module.exports = mongoose.model("User", User);