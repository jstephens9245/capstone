import {CLEAR_STORE} from '../constants';
import {combineReducers} from 'redux';

export const combinedReducer = combineReducers({dummy: (state = {}) => state});

export default function rootReducer(store, action) {
	if (action.type === CLEAR_STORE) return combinedReducer();

	return combinedReducer(store, action);
}
