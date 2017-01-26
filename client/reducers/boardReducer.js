import {RECEIVE_BOARD} from '../constants';
import {RECEIVE_BOARD_NOTES} from '../constants';

const initialState = {selectedBoard: {}, allBoards: [], selectedBoardNotes: []};

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_BOARD:
      newState.selectedBoard = action.board;
      break;

    case RECEIVE_BOARD_NOTES:
      newState.selectedBoardNotes = action.notes
      break;

      // case RECEIVE_BOARDS:
      // 	newState.allBoards = action.boards
        // break;

    default:
      return state;
  }

  return newState;
}
