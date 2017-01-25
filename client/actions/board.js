import axios from 'axios';
import RECEIVE_BOARD from '../constants';


export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board
});

export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards
});

export const getBoard = (boardId) => (dispatch) => {
  axios.get(`/api/${boardId}`)
    .then((res) => res.data)
    .then((board) => dispatch(receiveBoard(board)));
};


/*---query string--*/
// export const getBoards = () => (dispatch) => {
// 	axios.get(`/api/${userId}`)
// 		.then((res) => res.data)
// 		.then((board) => dispatch(receiveBoard(board)));
// };
