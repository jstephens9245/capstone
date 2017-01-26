const express = require('express');
const router = express.Router();
const Board = require('ROOT/server/models/board');

router.get('/', (req, res, next) => Board.findAll()
  .then((board) => {
    res.json(board);
  })
  .catch((err) => console.log(err)));

  router.get('/:boardId', (req, res, next) => {
    let boardId = req.params.boardId
   return  Board.findById(boardId)
      .then((board) => {
        res.json(board);
      })
      .catch((err) => console.log(err));
    })

module.exports = router;
