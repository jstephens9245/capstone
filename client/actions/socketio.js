import { CONNECT, ADD_LISTENER, REMOVE_LISTENER, EMIT } from '../constants';


export const initiateNameSpaceConnection = (namespace) => ({
  type: CONNECT,
  namespace
});

export const emit = (eventName, payload) => ({
  type: EMIT,
  eventName,
  payload
});

export const addListener = (eventName, method) => ({
  type: ADD_LISTENER,
  eventName,
  method,
});

export const removeListener = (eventName, method) => ({
  type: REMOVE_LISTENER,
  eventName,
  method
});



export const socketConnect = (namespace) => dispatch => {
  dispatch(initiateNameSpaceConnection(namespace));

};

export const socketEmit = (eventName, payload) => dispatch => {
  dispatch(emit(eventName, payload));
};

export const addSocketListener = (eventName, method) => dispatch => {
  dispatch(addListener(eventName, method));
};

export const removeSocketListener = (eventName, method) => dispatch => {
  dispatch(removeListener(eventName, method));
};









