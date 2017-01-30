import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ViewNote from '../components/ViewNote';

import {getBoard} from '../actions/board';
import {getNote} from '../actions/note';

export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);

function mapStateToProps(state) {
  return {
    board: state.boardReducer.selectedBoard,
    note : state.noteReducer.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNote : getNote,
    getBoard: getBoard
  }, dispatch);
}
