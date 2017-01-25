import {RECEIVE_BOARD} from '../constants';

const initialState = {selectedBoard: {}, allBoards: []};

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  console.log("IN BOARD REDUCER", RECEIVE_BOARD)
  switch (action.type) {
  case RECEIVE_BOARD:
    newState.selectedBoard = action.board;
    break;

    // case RECEIVE_BOARDS:
    // 	newState.allBoards = action.boards
      // break;

  default:
    console.log('DEFAULT STATE')
    return state;
  }
  console.log("NEW STATE", newState)

  return newState;
}
