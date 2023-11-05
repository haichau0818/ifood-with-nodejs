const newRouter = require('./news');
const courseRouter = require('./courses');

const siteRouter = require('./site');

function route(app) {
  app.use('/news', newRouter);
  app.use('/courses', courseRouter);
  
  app.use('/', siteRouter);
}

module.exports = route;
