'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Board = db.define('board', {
  name: Sequelize.TEXT,
  url : Sequelize.TEXT
});

module.exports = Board;
