const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');

route.get('/:slug', siteController.search);

route.get('/', siteController.index);

module.exports = route;
