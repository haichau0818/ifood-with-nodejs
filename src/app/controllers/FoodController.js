
const Food = require("../models/Food");
const { mongooseToOject, multipleMongooseToOject } = require("../../ulti/mongoose");


class FoodController{

    async show(req, res,next) {

        const foods = await Food.find({})
        .then(foods=>{
          res.render('foods/show',{
            foods: multipleMongooseToOject(foods)
          })
        })
        .catch(next);   
      }

      create(req, res, next) {
        res.render("foods/create");
      }
    
      ///[POST]course/store
    
      async store(req, res, next) {
        const food = await new Food(req.body);
        food
          .save()
          .then(() => res.redirect("/foods/foods"))
          .catch((err) => {});
      }


}

module.exports = new FoodController();