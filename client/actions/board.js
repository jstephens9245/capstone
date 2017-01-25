import axios from 'axios';
import RECEIVE_BOARD from '../constants';

export const receiveBoard = (board) => ({
	type: RECEIVE_BOARD,
	board
});

export const getBoard = (boardId) => {
	axios.get('/api');
};
