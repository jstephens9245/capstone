import axios from 'axios';
import {RECEIVE_NOTES, SELECT_NOTE, MOVE_NOTE} from '../constants';


export function receiveNote(note) {
  return {
    type   : SELECT_NOTE,
    payload: note
  };
}

export function receiveNotes(notes) {
  return {
    type   : RECEIVE_NOTES,
    payload: notes
  };
}


export const moveNote = (id, left, top) => {
  return {
    type : MOVE_NOTE,
    notes: {
      [id]: {left, top}
    }
  };

};

export function getNote(noteId) {
  return (dispatch) =>
  axios.get(`/api/notes/${noteId}`)
    .then(res => res.data)
    .then(note => dispatch(receiveNote(note)))
    .catch(err => console.warn(err));
}

export function getAllNotes({userId, boardId}) {
  return dispatch =>
    axios.get('/api/notes/', {params: {userId, boardId}})
      .then(res => res.data)
      .then(notes => dispatch(receiveNotes(notes)))
      .catch(err => console.warn(err));
}

export function createNote(note, boardId) {
  return dispatch =>
    axios.post('/api/notes/', {
      content: note.content,
      color  : note.color,
      boardId: boardId || note.boardId
    })
      .then(() => {
        // TODO: dispatch to sockets
      })
      .catch(err => console.warn(err));
}
