// import {MOVE_NOTE, RECEIVE_NOTES, RECEIVE_BOARD_NOTES} from '../constants';
//
//
// const initialState = {
//   notes: {}
// };
//
//
// export default function(state = initialState, action) {
//   const newState = Object.assign({}, state);
//   console.log('ACTION', action.type);
//   switch (action.type) {
//
//   case MOVE_NOTE:
//     const keys = Object.keys(action.notes);
//     keys.forEach(key => {
//       newState.notes[key].left = action.notes[key].left;
//       newState.notes[key].top = action.notes[key].top;
//     });
//     break;
//
//
//   default:
//
//     return state;
//
//   }
//
//   return newState;
// }
