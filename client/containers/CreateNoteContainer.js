import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';

import {getBoard} from '../actions/board';

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);

function mapStateToProps(state) {
  return {
    board: state.boardReducer.selectedBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBoard: bindActionCreators(getBoard, dispatch)
  };
}
