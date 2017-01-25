import {CLEAR_STORE} from '../constants';
import {combineReducers} from 'redux';
import boardReducer from './boardReducer';

export const combinedReducer = combineReducers({boardReducer});

export default function rootReducer(store, action) {
	if (action.type === CLEAR_STORE) return combinedReducer();

	return combinedReducer(store, action);
}
