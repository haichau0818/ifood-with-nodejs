const newRouter = require('./news');
const foodRouter = require('./foods');
const courseRouter = require('./courses');
const meRouter = require('./me');
const loginRegisterRouter = require('../routes/login-register');

const siteRouter = require('./site');

function route(app) {
  app.use('/news', newRouter);
  app.use('/courses', courseRouter);
  app.use('/food', foodRouter);

  app.use('/me', meRouter);
  app.use('/login-register', loginRegisterRouter);
  app.use('/', siteRouter);
}

module.exports = route;
