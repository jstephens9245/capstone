import axios from 'axios';
import {RECEIVE_BOARD, RECEIVE_BOARDS} from '../constants';


export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

export const receiveAllBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards
});

export const getAllBoards = (userId) => {
  return dispatch => {
    axios.get('/api/boards/', {params: {userId}})
      .then((res) => res.data)
      .then((boards) => {
        console.log(boards);
        dispatch(receiveAllBoards(boards));
      });
  };
};

export const getBoard = (boardId) => (dispatch) => {
  axios.get(`/api/boards/${boardId}`)
    .then((res) => res.data)
    .then((board) => {
      dispatch(receiveBoard(board));
    });
};
