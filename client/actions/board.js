import axios from 'axios';

import {RECEIVE_BOARD, RECEIVE_BOARDS, ADD_NEW_BOARD, RECEIVE_BOARD_NOTES} from '../constants';

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

export const addNewBoard = (board) => ({
  type: ADD_NEW_BOARD,
  board
});

export const getAllBoards = (userId) => {
  return dispatch => {
    axios.get('/api/boards/', {params: {userId}})
      .then((res) => res.data)
      .then((boards) => {
        dispatch(receiveAllBoards(boards));
      });
  };
};


export const receiveBoardNotes = (notes) => {
  return {
    type: RECEIVE_BOARD_NOTES,
    notes
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


export const getBoardNotes = (boardId) => (dispatch) => {
  axios.get('/api/notes/', {params: {board_id: boardId}})
    .then(res => res.data)
    .then(boardNotes => {
      dispatch(receiveBoardNotes(boardNotes));
    });

};
