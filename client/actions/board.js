import axios from 'axios';
import {RECEIVE_BOARD} from '../constants';
import {RECEIVE_BOARD_NOTES} from '../constants';


export const receiveBoard = (board) => {
  return {
  type: RECEIVE_BOARD,
  board
  }
};

export const receiveBoardNotes = (notes) => {
  return {
  type: RECEIVE_BOARD_NOTES,
  notes
  }
};


export const getBoard = (boardId) => (dispatch) => {

  axios.get(`/api/board/${boardId}`)
    .then((res) => res.data)
    .then((board) => {
      dispatch(receiveBoard(board))
    });
};


export const getBoardNotes = (boardId) => (dispatch) =>{
  console.log('IN GBN')
  axios.get('/api/notes/', {params: {board_id: boardId}})
    .then(res => res.data)
    .then(boardNotes => {
      dispatch(receiveBoardNotes(notes))
    })

}
