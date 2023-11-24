const express = require('express');
const route = express.Router();

const foodController = require('../app/controllers/FoodController');

route.get('/foods', foodController.show);
route.get('/create', foodController.create);
route.get('/detail/:slug', foodController.detail);

//route.post('/store', foodController.create);




module.exports = route;