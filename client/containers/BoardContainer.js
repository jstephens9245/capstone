import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import Board from '../components/Board';
import io from 'socket.io-client';
import {getBoardNotes} from '../actions/board';

// const socket = io('', { path: '/api/board/1' });

class BoardContainer extends Component {

  componentDidMount() {
    const { dispatch, board} = this.props;

    const boardId = board.id;

    // dispatch(getBoardNotes(boardId));

  }

  render() {
    return (
      <Board {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({board: state.board.selectedBoard});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
