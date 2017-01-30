import axios from 'axios';

import {RECEIVE_BOARD, RECEIVE_BOARDS, ADD_NEW_BOARD, RECEIVE_BOARD_NOTES} from '../constants';

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

export const receiveAllBoards = (boards, permissions) => ({
  type: RECEIVE_BOARDS,
  boards,
  permissions
});

export const addNewBoard = (board) => ({
  type: ADD_NEW_BOARD,
  board
});


export const getAllBoards = () => {
  return dispatch => {
    axios.get('/api/boards/')
      .then((res) => res.data)
      .then((boards) => {
        dispatch(receiveAllBoards(boards.boards, boards.permissions));
      });
  };
};


export const createBoard = (boardName) => {
  return dispatch => {
    axios.post('/api/boards/', {boardName})
      .then((res) => res.data)
      .then((board) => {
        dispatch(addNewBoard(board));
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
