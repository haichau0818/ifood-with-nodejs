const express = require('express');
const route = express.Router();

const foodController = require('../app/controllers/FoodController');

route.get('/foods', foodController.show);
route.get('/manage', foodController.manage);
route.get('/create', foodController.create);
route.post('/store', foodController.store);
route.get('/detail/:slug', foodController.detail);





module.exports = route;