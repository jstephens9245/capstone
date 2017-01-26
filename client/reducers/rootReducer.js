import {CLEAR_STORE} from '../constants';
import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import userReducer from './userReducer';

export const combinedReducer = combineReducers({boardReducer, userReducer});

export default function rootReducer(store, action) {
  if (action.type === CLEAR_STORE) return combinedReducer();

  return combinedReducer(store, action);
}
