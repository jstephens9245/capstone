'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
	first_name: Sequelize.STRING,
	last_name : Sequelize.STRING,
	email     : Sequelize.STRING,
	password  : Sequelize.TEXT
});

module.exports = User;
