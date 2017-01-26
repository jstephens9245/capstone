import {SET_LOGIN_USER} from '../constants';

const initialState = { loggedInUser: {} };

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case SET_LOGIN_USER:
    newState.loggedInUser = action.user;
    break;
  default:
    return state;
  }
  return newState;
}
