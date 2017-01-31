import React, { Component } from 'react';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import {NOTE} from '../constants';
import {compose} from 'redux';
import NoteWrapper from '../components/NoteWrapper';
import {moveNote} from '../actions/note';
import store from '../store';
import flow from 'lodash/flow';


const styles = {
  width   : 1000,
  height  : 1000,
  position: 'relative'
};

const noteTarget = {
  drop(props, monitor, component) {

    const delta = monitor.getDifferenceFromInitialOffset();
    const item = monitor.getItem();

    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);


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


  render() {

    const {movedNote, notes, connectDropTarget} = this.props;
    return connectDropTarget(
      <div style={styles}>
        {notes.map((note) => {
          const { left, top } = note;

          return (
            <NoteWrapper
              key={note.id}
              id={note.id}
              left={left}
              top={top}
              note={note}
            >

            </NoteWrapper>
          );
        })}
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    notes: state.noteReducer.all,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveNote: (id, left, top) =>
  dispatch(moveNote(id, left, top))
});

export default flow(DropTarget(NOTE, noteTarget, collect
), connect(mapStateToProps, mapDispatchToProps))(NoteBoardContainer)
;
