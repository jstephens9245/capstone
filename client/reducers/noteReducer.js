import {RECEIVE_NOTE, RECEIVE_NOTES, SELECT_NOTE, MOVE_NOTE } from '../constants';

const initState = {
  all     : [],
  selected: null,

};

export default function noteReducer(state = initState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_NOTE:
    nextState.all = [ ...nextState.all, action.payload ];
    break;
  case RECEIVE_NOTES:
    nextState.all = action.payload;
    break;

  case SELECT_NOTE:
    nextState.selected = nextState.all.find(note => note.id == action.payload.noteId);
    break;

  case MOVE_NOTE:
    const keys = Object.keys(action.notes);
    nextState.all = nextState.all.map((note, i) => {

      const keyId =  note.id;
      if (action.notes[keyId]) {
        return Object.assign({}, note, {left: action.notes[keyId].left, top: action.notes[keyId].top });
      } else {
        return note;
      }
    });
    console.log('sadfasdfsadfd', nextState.all);
    break;


  default:
    return state;
  }
  return nextState;
}
