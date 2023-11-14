
const Drink = require("../models/Drink");
const { mongooseToOject, multipleMongooseToOject } = require("../../ulti/mongoose");


class DrinkController{

    async show(req, res,next) {

        const drinks = await Drink.find({})
        .then(drinks=>{
          res.render('drinks/show',{
            drinks: multipleMongooseToOject(drinks)
          })
        })
        .catch(next);   
      }

      // create(req, res, next) {
      //   res.render("foods/create");
      // }
    
      ///[POST]course/store
    
      // async store(req, res, next) {
      //   const food = await new Food(req.body);
      //   food
      //     .save()
      //     .then(() => res.redirect("/foods/foods"))
      //     .catch((err) => {});
      // }


}

module.exports = new DrinkController();
