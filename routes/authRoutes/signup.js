const express = require('express');
const router = express.Router();
const User        = require("../../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login");
const passport    = require("passport");


router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post("/signup", (req, res, next) => {
 const username = req.body.username;
 const password = req.body.password;
 const email =  req.body.email;
 const name = req.body.name;
 if (username === "" || password === "" || email === "" || name === "") {
   res.render("auth/signup", { message: "Please fill all fields." });
   return;
 }

 User.findOne({ username:username }, "username", (err, user) => {
   if (user !== null) {
     res.render("auth/signup", { message: "Sorry, that username already exists" });
     return;
   }

   const salt = bcrypt.genSaltSync(bcryptSalt);
   const hashPass = bcrypt.hashSync(password, salt);

   const newUser = new User({
     username: username,
     password: hashPass,
     email: email,
     name: name
   });

   newUser.save((err) => {
     if (err) {
       res.render("auth/signup", { message: "Something went wrong" });
     } else {
       res.redirect("/");
     }
   });
 });
});

module.exports = router;