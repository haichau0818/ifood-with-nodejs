const User = require("../models/User");
const { mongooseToOject } = require("../../ulti/mongoose");

class LoginRegisterController {

  async login(req, res, next) {
     
    res.render("login/login-register",{layout:'login'})
  }
  ///[POST]login-register/

  async loginConfirm(req, res, next) {
     
    const checkLogin = await User.findOne({email: req.body.email});
   
    if (checkLogin.password === req.body.password) {
      res.render('home',{user: mongooseToOject(checkLogin)})
    }else{
      res.send('none');
    }
  }

  async createAccout(req, res, next) {
     
      const user = await new User(req.body);
      user
        .save()
        .then(() => res.render("login/login-register"))
        .catch((err) => {});
    }
  }

module.exports = new LoginRegisterController();
