
const Drink = require("../models/Drink");
const { mongooseToOject, multipleMongooseToOject } = require("../../ulti/mongoose");


class DrinkController{
  
    //[GET]/drink/drinks
    async show(req, res,next) {

        const drinks = await Drink.find({})
        .then(drinks=>{
          res.render('drinks/show',{
            drinks: multipleMongooseToOject(drinks)
          })
        })
        .catch(next);   
      }
}

module.exports = new DrinkController();
