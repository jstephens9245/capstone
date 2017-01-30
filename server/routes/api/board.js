'use strict';

const express = require('express');
const router = express.Router();
const {Board, User, BoardPermission, Note} = require('ROOT/server/models/');


router.get('/', (req, res, next) => {
  let boardQuery = {};
  let boardPermissionQuery = {};

  if (req.user) {
    boardQuery = {
      include: [ {
        model: User,
        where: { id: req.user.id},
      } ]
    };
    boardPermissionQuery = {
      where: { user_id: req.user.id}
    };
  }


  Promise.all([
    Board.findAll(boardQuery),
    BoardPermission.findAll(boardPermissionQuery)
  ])
    .then(([ boards, permissions ]) => {
      res.json({boards, permissions});
    })
    .catch((err) => console.log(err));
});


router.get('/:boardId', (req, res, next) => {
  const boardId = req.params.boardId;
  return Board.findById(boardId)
    .then((board) => {
      res.json(board);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res, next) => {
  const boardInfo = req.body.boardName;
  Board
    .create({
      name: boardInfo
    })
    .then(board => {
      return Promise.all([ board, board.addUser(req.user) ]);
    })
    .then(([ board, permission ]) => {
      return Promise.all([
        board,
        BoardPermission.findOne({
          where: {
            board_id: board.id,
            user_id : req.user.id
          }
        })
          .then((p) => {
            return p.update({permission: 'admin'});
          })
      ]);
    })
    .then(([ board ]) => {
      res.json(board);
    })
    .catch(next);
});


router.put('/:id', (req, res, next) => {
  const changes = {};
  if (req.body.name) changes.name = req.body.name;
  if (req.body.url) changes.url = req.body.url;

  Board.update(changes, {
    where: {
      id: req.params.id
    }
  })
    .then(board => res.sendStatus(200))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Board.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

router.use((req, res, next, err) => {
  console.log('Error in server/routes/api/board.js');
  next(err);
});


module.exports = router;
