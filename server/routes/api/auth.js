'use strict';

const express = require('express');
const Router = express.Router;
const router = new Router();

const passport = require('passport');
const {User} = require('ROOT/server/models');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({
    where: {
      email: email,
    }
  })
    .then((user) => {
      if (user) {
        return Promise.all([
          user.checkPassword(password),
          user
        ]);
      } else {
        done(null, false, {message: 'Incorrect authentication '});
      }
    })
    .then(result => {
      const [passwordMatched, user] = result;
      passwordMatched ? done(null, user) : done(null, false, {message: 'password is incorrect'});
    })
    .catch(done);
}));


router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, message) => {
    if (err) {
      return next(err);
    }
    if (user) {
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }

        return res.send(user);
      });
    }
    else {
      return res.send(message);
    }
  })(req, res, next);
});

module.exports = router;
