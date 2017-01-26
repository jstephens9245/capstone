import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateBoard from '../components/CreateBoard';

const mapStateToProps = (state, ownProps) => {
  return {
    user  : state.user,
    boards: state.boardReducer.allBoards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const CreateBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoard);

export default CreateBoardContainer;
