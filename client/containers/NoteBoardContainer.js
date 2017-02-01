  import React, { Component } from 'react';
  import {bindActionCreators, compose} from 'redux';
  import {DropTarget} from 'react-dnd';
  import {connect} from 'react-redux';
  import { browserHistory } from 'react-router';
  import {NOTE} from '../constants';
  import NoteWrapper from '../components/NoteWrapper';
  import DraggableNote from '../components/DraggableNote';
  import snapToGrid from '../components/snapToGrid';
  import {moveNote} from '../actions/note';
  import {setLoginUser} from '../actions/user';
  import {
    socketConnect,
    socketEmit,
    clearSocketListeners,
    socketDisconnect,
    addSocketListener
  } from '../actions/socketio';
  import store from '../store';
  import flow from 'lodash/flow';
  import isEmpty from 'lodash/isEmpty';
  import {genShortHash} from '../utils/stringHash';


  const styles = {
    height  : 1000,
    width   : 1000,
    position: 'relative'
  };

  const noteTarget = {
    drop(props, monitor, component) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const item = monitor.getItem();

      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (props.snapToGrid) {
        [ left, top ] = snapToGrid(left, top);
      }

      props.moveNote(item.id, left, top);


    },
  };

  const collect = (connector, monitor) => {

    return {
      connectDropTarget: connector.dropTarget(),
      isOver           : monitor.isOver()
    };
  };


  class NoteBoardContainer extends Component {
    constructor(props) {
      super(props);
      console.log('PROPS NBC', props);
    }

    componentWillMount() {
      this.props.socketConnect('board');
      this.props.addSocketListener('note');


    }

    boardUpdate() {
      this.props.socketEmit('updateBoard', {

      });
    }

    componentWillReceiveProps({board, user, note}) {
      console.log('CWRP', this.props, 'BOARD', board);
      if (!this.props.board || isEmpty(this.props.board)) {
        return;
      } else {

        this.props.socketEmit('join', {

          room: genShortHash(board.id),
          name: user.first_name + user.last_name
        });

        this.props.socketEmit('updateBoard', {
          note: note
        });
      }
    }

    componentWillUnmount() {
      this.props.clearSocketListeners();
      this.props.socketDisconnect();
    }


    renderNote(item, key) {

      return (
        <DraggableNote key={key} id={key} {...item} />
      );
    }

    render() {
      const {movedNote, notes, connectDropTarget} = this.props;
      console.log('NoteBoardContainer', this.props);

      return connectDropTarget(
      <div style={styles}>
        {notes.map(note => {
          return this.renderNote(note, note.id);
        }
      )}

      </div>
    );
    }
}

  const mapStateToProps = (state, ownProps) => {

    return {notes: state.noteReducer.all, user: state.userReducer.loggedInUser};

  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({moveNote, socketConnect, socketEmit, clearSocketListeners, socketDisconnect, addSocketListener}, dispatch);
  };

  export default flow(DropTarget(NOTE, noteTarget, collect
), connect(mapStateToProps, mapDispatchToProps))(NoteBoardContainer)
;
