const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseController');


route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:id/edit', courseController.edit);

route.put('/:id', courseController.update);
route.delete('/:id', courseController.delete);

route.get('/:slug', courseController.show);


module.exports = route;
