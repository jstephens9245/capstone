'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Note = db.define('note', {
  content: Sequelize.TEXT,
  color  : Sequelize.TEXT
});

module.exports = Note;
