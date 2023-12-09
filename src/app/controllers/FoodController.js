const Food = require("../models/Food");
const {
  mongooseToOject,
  multipleMongooseToOject,
} = require("../../ulti/mongoose");

class FoodController {
  async show(req, res, next) {
    const foods = await Food.find({})
      .then((foods) => {
        res.render("foods/show", {
          foods: multipleMongooseToOject(foods),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("foods/create");
  }

  ///[POST]food/store

  async store(req, res, next) {
    const food = await new Food(req.body);
    food
      .save()
      .then(() => res.redirect("/food/foods"))
      .catch((err) => {});
  }

  //[GET]food/manage
  async manage(req, res, next) {
    const food = await Food.find({})
      .then((food) => {
        res.render("foods/manage", {
          food: multipleMongooseToOject(food),
        });
      })
      .catch(next);
  }
  ///[GET]food/detail/:slug
  async detail(req, res, next) {

    const food = await Food.findOne({ slug: req.params.slug })
      .then((food) => {
        res.render("foods/detail", {
          food: mongooseToOject(food),
        });
      })
      .catch(next);
  }
}

module.exports = new FoodController();
