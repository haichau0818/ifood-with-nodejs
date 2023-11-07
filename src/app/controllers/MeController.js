const Course = require('../models/Course');
const {mongooseToOject, multipleMongooseToOject} =  require('../../ulti/mongoose');

 class MeController {
  
 ///[GET]course/slug
  async storedCourse(req, res,next) {

    const courses = await Course.find({})
    .then(courses=>{
      res.render('me/stored-course',{
        courses: multipleMongooseToOject(courses)
      })
    })
    .catch(next);   
  }
 ///[GET]course/create


 ///[POST]course/store

 
}

module.exports = new MeController();
