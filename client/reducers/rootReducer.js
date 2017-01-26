import {CLEAR_STORE} from '../constants';
import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import noteReducer from './noteReducer';
import userReducer from './userReducer';

export const combinedReducer = combineReducers({
  boardReducer,
  noteReducer,
  userReducer
});

export default function rootReducer(store, action) {
  if (action.type === CLEAR_STORE) return combinedReducer();

  return combinedReducer(store, action);
}
