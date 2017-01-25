'use strict';

const express = require('express');
const Router = express.Router;
const router = new Router();
const {User} = ('ROOT/server/models');


/* create user */
router.post('/', (req, res, next) => {
	User.findOne({email: req.body.email})
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



