'use strict';

require('./db');

const Board = require('./board');
const Note = require('./note');
const User = require('./user');

Board.hasMany(Note);
Note.belongsTo(Board);
User.hasMany(Board);
User.hasMany(Note);
Note.belongsTo(User);

module.exports = {
  Board, Note, User
};
