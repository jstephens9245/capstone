'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const BoardPermission = db.define('board_permission', {
  permission: {
    type        : Sequelize.ENUM('user', 'admin'),
    defaultValue: 'user'
  }
});

module.exports = BoardPermission;
