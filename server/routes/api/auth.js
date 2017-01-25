'use strict';

const express = require('express');
const Router = express.Router;
const router = new Router();

const passport = require('passport');
const {User} = require('ROOT/server/models');

const LocalStrategy = require('passport-local').Strategy;

router.post('/', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: 'http://localhost:3030/login',
		failureRedirect: '/404'
	})(req, res, next);
});

passport.use(new LocalStrategy({
	email: 'email',
	password: 'password'
}, (email, password, done) => {
	console.log(`local strategy: ${email} ${password}`);
	User.findOne({
		where: {
			email: email,
			password: password
		}
	})
		.then((user) => {
			if (user) {
				done(null, user);
			} else {
				done(null, false, {message: 'Incorrect authentication '});
			}
		})
		.catch(done);
}));

module.exports = router;
