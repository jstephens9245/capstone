'use strict';

const express = require('express');
const Router = express.Router;
const router = new Router();
const {User} = require('ROOT/server/models');
const chalk = require('chalk');


/* create user */
router.post('/', (req, res, next) => {
  const { first_name, last_name } = req.body;
  console.log('FIRSTNAME: ', first_name);
  User.findOne({
    where: {email: req.body.email}})
    .then(user => {
      if (user) res.send({message: 'email already exists'});
      else {
        return User.create(req.body);
      }
    })
    .then((user) => {
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })
    .catch(next);
});

module.exports = router;
