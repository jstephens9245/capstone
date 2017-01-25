const express = require('express');
const router = express.Router();
const Board = require('ROOT/server/models/board');

router.get('/', (req, res, next) => Board.findAll()
	.then((board) => {
		console.log('HELLO IN ROUTER BOARD', board);
		res.json(board);
	})
	.catch((err) => console.log(err)));

	router.get('/:boardId', (req, res, next) => {
		let boardId = route.params.boardId
		Board.findAll({
			where: {
				id: boardId
			}
		})
			.then((board) => {
				console.log('HELLO IN ROUTER BOARD', board);
				res.json(board);
			})
			.catch((err) => console.log(err));
		})

module.exports = router;
