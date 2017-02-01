import axios from 'axios';
import {RECEIVE_NOTES, RECEIVE_NOTE, SELECT_NOTE, MOVE_NOTE} from '../constants';
import {socketEmit} from './socketio';

export function receiveNote(note) {
  return {
    type   : RECEIVE_NOTE,
    payload: note
  };
}

export function receiveNotes(notes) {
  return {
    type   : RECEIVE_NOTES,
    payload: notes
  };
}

export function selectNote(noteId) {
  return {
    type   : SELECT_NOTE,
    payload: {noteId}
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
    .then(note => {
      return Promise.all([
        note,
        dispatch(selectNote(noteId))
      ]);
    })
    .then(([ note ]) => note)
    .catch(err => console.warn(err));
}

export function getAllNotes({userId, boardId}) {
  return dispatch =>
    axios.get('/api/notes/', {params: {userId, boardId}})
      .then(res => {
        const keys = Object.keys(res.data);
        return res.data;
      })
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
      .then(({data}) => {
        dispatch(socketEmit('note', data));
      })
      .catch(err => console.warn(err));
}
