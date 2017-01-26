import axios from 'axios';
import {RECEIVE_BOARD} from '../constants';


export const receiveBoard = (board) => {
  return {
  type: RECEIVE_BOARD,
  board
  }
};

// export const receiveBoards = (boards) => ({
//   type: RECEIVE_BOARDS,
//   boards
// });

export const getBoard = (boardId) => (dispatch) => {

  axios.get(`/api/board/${boardId}`)
    .then((res) => res.data)
    .then((board) => {
      dispatch(receiveBoard(board))
    });
};
