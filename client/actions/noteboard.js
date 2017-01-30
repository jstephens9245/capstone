import {MOVE_NOTE, RECEIVE_NOTES} from '../constants';

const notesPayload = {
  noteA: {top: 200, left: 600, title: 'hello'},
  noteB: {top: 180, left: 20, title: 'goodbye'}
};


export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};


export const moveNote = (id, left, top) => {
  console.log('TEST', {[id]: {left, top}});
  return {
    type : MOVE_NOTE,
    notes: {
      [id]: {left, top}
    }
  };

};

export const getNotes = () => dispatch => {
  console.log('GET NOTES');
  dispatch(receiveNotes(notesPayload));
};


  // moveNote(id, left, top) {
  //   this.setState(update(this.state, {
  //     boxes: {
  //       [id]: {
  //         $merge: { left, top },
  //       },
  //     },
  //   }));
  // }
