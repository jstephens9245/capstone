'use strict';

const db = require('./db');
const Board = require('./board');
const Note = require('./note');
const User = require('./user');
const BoardPermission = require('./board_permissions');

Board.hasMany(Note);
Note.belongsTo(Board);

User.belongsToMany(Board, {through: BoardPermission});
Board.belongsToMany(User, {through: BoardPermission});

User.hasMany(Note);
Note.belongsTo(User);

module.exports = {
  db, Board, Note, User, BoardPermission
};
