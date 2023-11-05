const Course = require('../models/Course');
const {multipleMongooseToOject} =  require('../../ulti/mongoose');

 class SiteController {
  ///GET
  async index(req, res,next) {
    
      const courses = await Course.find({})
        .then(courses=>{
          res.render('home',{
            courses: multipleMongooseToOject(courses)
          })
        })
        .catch(next);
   
  }

  search(req, res) {
    res.send('Search');
  }
}

module.exports = new SiteController();
