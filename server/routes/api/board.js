const express = require('express');
const router = express.Router();
const {Board, User, BoardPermission} = require('ROOT/server/models/');


router.get('/:boardId', (req, res, next) => {
  const boardId = req.params.boardId;
  return Board.findById(boardId)
    .then((board) => {
      res.json(board);
    })
    .catch((err) => console.log(err));
});


router.get('/', (req, res, next) => {
  const userId = req.query.userId;
  let searchQuery = {};
  if (userId) {
    searchQuery = {
      include: [ {
        model: User,
        where: { id: Number(userId)},
      } ]
    };
  }

  Board.findAll(searchQuery)
    .then((boards) => {
      res.json(boards);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res, next) => {
  const boardInfo = req.body.boardName;
  let board = {};
  Board.create({
    name: boardInfo,
  })
    .then((rememberBoard) => {
      board = rememberBoard;
      return rememberBoard.addUser(req.user);
    })
    .then(boardPermission => {
      BoardPermission.findOne({where: {
        board_id: board.id,
        user_id : req.user.id
      }})
        .then((result) => {
          console.log(result);
          res.json(board);
        });
    })
    .catch(next);
});


module.exports = router;
