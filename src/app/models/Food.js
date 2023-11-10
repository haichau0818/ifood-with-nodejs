const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Food = new Schema({
  name: { type: String, default: "Food 1" },
  price: {
    type: Number,
    get: v => (v/100).toFixed(2),
    set: v => v*100
},
  quantity: { type: Number ,default: 0},
  expDate: { type: Date , default: Date.now},
  category: { type: String},
  desription: { type: String},
  slug: { type: String, slug:'name', unique:true},
},
{
  timestamps:true,
  toJSON: { getters: true }
});

module.exports = mongoose.model("Food", Food);