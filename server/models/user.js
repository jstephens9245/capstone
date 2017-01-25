'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const db = require('./db');

const User = db.define('user', {
	first_name: Sequelize.STRING,
	last_name : Sequelize.STRING,
	email     : Sequelize.STRING,
	password  : Sequelize.TEXT
}, {
	instanceMethods: {
		hashPassword: () => {
			return new Promise((resolve, reject) => {
				bcrypt.genSalt(4, (err, salt) => {
					if (err) {
						return reject(err);
					}
					bcrypt.hash(this.password, salt, null, (hashErr, hash) => {
						if (hashErr) {
							return reject(err);
						}
						this.password = hash;
						resolve();
					});
				});
			});
		},
		checkPassword: (password) => {
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, this.password, (err, matched) => {
					if (err) {
						return reject(err);
					}
					resolve(matched);
				});
			});
		}
	},
	hooks: {
		beforeCreate: function(user) {
			user.hashPassword();
		},
		beforeUpdate: function(user) {
			if (!user.changed('password')) {
				return;
			}
			user.hashPassword();
		}
	}
});

module.exports = User;
