'use strict';

const {db, User, Board, Note, BoardPermission} = require('ROOT/server/models');
const {randomString, randomNumber, randomColor} = require('ROOT/server/lib/utils/random');
const userCount = 10;
const boardsPerUser = [ 3, 8 ];
const notesPerBoard = [ 4, 12 ];
const presetUsers = [
  {
    first_name: 'Ada',
    last_name : 'Lovelace',
    email     : 'ada@lovelace.com',
    password  : '12345'
  }
];

module.exports = db.didSync
  .then(() => db.sync({force: true}))
  .then(() => seedUsers(userCount))
  .then(users => seedBoards(users, boardsPerUser))
  .then(([ boards, users ]) => seedNotes(boards, users, notesPerBoard))
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => db.close());

/* User Functions */
function seedUsers(count) {
  const users = [ ...presetUsers ];

  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }

  return db.Promise.map(users, user => User.create(user));
}
function generateUser() {
  return {
    first_name: randomString(3, 12),
    last_name : randomString(3, 12),
    email     : `${randomString(3, 12)}@${randomString(2, 6)}.com`,
    password  : randomString(8, 36)
  };
}

/* Board Functions */
function seedBoards(users, range) {
  const boards = [];

  users.forEach(user => {
    for (let i = 0; i < randomNumber(range[0], range[1]); i++) {
      let board;
      boards.push(
        Board.create(generateBoard())
          .then(data => {
            board = data;
            return board.addUser(user);
          })
          .then(() => board)
      );
    }
  });

  return db.Promise.all([
    db.Promise.all(boards),
    users
  ]);
}
function generateBoard() {
  return {
    name: randomString(3, 20),
    url : `http://${randomString(3, 8)}.com/${randomString(36)}`
  };
}

/* Note Functions */
function seedNotes(boards, users, range) {
  const notes = [];

  boards.forEach(board => {
    for (let i = 0; i < randomNumber(range[0], range[1]); i++) {
      const user = users[randomNumber(users.length, false)];
      notes.push(
        Note.create(generateNote())
          .then(note => {
            return Promise.all([
              note.setBoard(board),
              note.setUser(user)
            ]);
          })
      );
    }
  });

  return db.Promise.all(notes);
}
function generateNote() {
  return {
    content: randomString(20, 120),
    color  : randomColor()
  };
}
