import {SELECT_NOTE, RECEIVE_NOTES} from '../constants';

const initState = {
  all     : [],
  selected: null
};

export default function noteReducer(state = initState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_NOTES:
    nextState.all = action.payload;
    break;
  case SELECT_NOTE:
    nextState.selected = nextState.all.find(note => note.id === action.payload.id);
    break;
  default:
    return state;
  }
  return nextState;
}
