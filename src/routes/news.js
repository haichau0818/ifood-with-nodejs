const express = require('express');
const route = express.Router();

const newController = require('../app/controllers/NewsController');

route.get('/:slug', newController.show);

route.get('/', newController.index);

module.exports = route;
