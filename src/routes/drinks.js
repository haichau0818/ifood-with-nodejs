const express = require('express');
const route = express.Router();

const drinkController = require('../app/controllers/DrinkController');

route.get('/drinks', drinkController.show);
//route.get('/create', drinkController.create);
//route.post('/store', foodController.create);




module.exports = route;