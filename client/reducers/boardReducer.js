import {RECEIVE_BOARD, RECEIVE_BOARDS, ADD_NEW_BOARD} from '../constants';

const initialState = {selectedBoard: {}, allBoards: []};

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_BOARD:
    newState.selectedBoard = action.board;
    break;
  case RECEIVE_BOARDS:
    newState.allBoards = action.boards;
    break;
  case ADD_NEW_BOARD:
    newState.allBoards = [ ...newState.allBoards, action.board ];
    break;
  default:
    return state;
  }

  return newState;
}
