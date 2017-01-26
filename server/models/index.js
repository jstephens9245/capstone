'use strict';

const db = require('./db');
const Board = require('./board');
const Note = require('./note');
const User = require('./user');

Board.hasMany(Note);
Note.belongsTo(Board);

User.hasMany(Board);
Board.belongsTo(User);

User.hasMany(Note);
Note.belongsTo(User);

module.exports = {
  db, Board, Note, User
};
