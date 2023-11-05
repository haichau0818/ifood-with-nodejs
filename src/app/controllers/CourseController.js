const Course = require('../models/Course');
const {mongooseToOject} =  require('../../ulti/mongoose');

 class CourseController {
  ///GET
 
  async show(req, res,next) {

    const courses = await Course.findOne({slug:req.params.slug})
    .then(courses=>{
      res.render('courses/show',{
        courses: mongooseToOject(courses)
      })
    })
    .catch(next);

   
  }
}

module.exports = new CourseController();
