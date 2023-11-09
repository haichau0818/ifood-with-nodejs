const express = require('express');
const route = express.Router();

const loginRegisterController = require('../app/controllers/LoginRegisterController');

route.post('/createAccout', loginRegisterController.createAccout);

route.post('/loginConfirm', loginRegisterController.loginConfirm);

route.get('/', loginRegisterController.login);



module.exports = route;