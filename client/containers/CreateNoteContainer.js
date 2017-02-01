import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';

import {getBoard} from '../actions/board';
import {createNote} from '../actions/note';
import {
  socketConnect,
  socketEmit,
  clearSocketListeners,
  socketDisconnect
} from '../actions/socketio';

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);

function mapStateToProps(state) {
  return {
    board: state.board.selectedBoard,
    user : state.userReducer.loggedInUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createNote,
    getBoard,
    socketConnect,
    socketEmit,
    clearSocketListeners,
    socketDisconnect
  }, dispatch);
}
