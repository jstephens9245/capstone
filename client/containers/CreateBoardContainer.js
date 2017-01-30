import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import {createBoard} from '../actions/board';

const mapStateToProps = (state, ownProps) => {
  return {
    user  : state.user,
    boards: state.board.allBoards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create: (boardName) => {
      dispatch(createBoard(boardName));
    }
  };
};

const CreateBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoard);

export default CreateBoardContainer;
