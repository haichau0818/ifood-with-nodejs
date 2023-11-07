const Course = require("../models/Course");
const { mongooseToOject } = require("../../ulti/mongoose");

class CourseController {
  ///[GET]course/slug
  async show(req, res, next) {
    const courses = await Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/show", {
          courses: mongooseToOject(courses),
        });
      })
      .catch(next);
  }
  ///[GET]course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  ///[POST]course/store

  async store(req, res, next) {
    const course = await new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }

  ///[GET]course/:id/edit

  async edit(req, res, next) {
    // res.render('courses/edit')
    const course = await Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToOject(course) })
      )
      .catch(next);
  }
  ///[PUT]course/:id/

  async update(req, res, next) {

    await Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }


  ///[DELETE]course/:id/

  async delete(req, res, next) {

    await Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
