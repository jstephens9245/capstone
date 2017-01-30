import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';

import {getBoard} from '../actions/board';
import {createNote} from '../actions/note';

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);

function mapStateToProps(state) {
  return {
    board: state.board.selectedBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNote: bindActionCreators(createNote, dispatch),
    getBoard  : bindActionCreators(getBoard, dispatch)
  };
}
