import socketClient from 'socket.io-client';
const io =  socketClient;
import isEmpty from 'lodash/isEmpty'

import {CONNECT, EMIT, ADD_LISTENER, REMOVE_LISTENER } from '../constants';

const initialState = {
};

export default function(socket = initialState, action) {
  let newSocket = Object.assign(socket);
  switch (action.type) {
  case CONNECT:
    newSocket = io(`http://localhost:3030/${action.namespace}`);
    break;
  case EMIT:
    if (!isEmpty(newSocket)) {
      newSocket.emit(action.eventName, action.payload);
    }
    break;
  case ADD_LISTENER:
    if (!isEmpty(newSocket)) {
      newSocket.on(action.eventName, action.method);
    }
    break;
  case REMOVE_LISTENER:
    if (!isEmpty(newSocket)) {
      newSocket.removeListener(action.eventName, action.method);
    }
    break;
  default:
    return socket;
  }
  return newSocket;
}


