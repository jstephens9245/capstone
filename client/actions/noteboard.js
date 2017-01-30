import {MOVE_NOTE, RECEIVE_NOTES} from '../constants';


const noteMaker = (num) => {
  let top = 20;
  let left = 80;
  const notesPayload = {};

  for (let i = 0; i < num; i++) {
    notesPayload[i] = {top: top, left: left, title: ('hello' + i)};
    top += 10;
    left += 100;
  }


  return notesPayload;

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
  dispatch(receiveNotes(noteMaker(12)));
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
