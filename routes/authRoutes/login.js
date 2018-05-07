const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.get("/logout", (req, res) => {
 req.logout();
 res.redirect("/login");
});

function ensureAuthenticated(req, res, next) {
 if (req.isAuthenticated()) {
   return next();
 } else {
   res.redirect('/login')
 }
}

module.exports = router;