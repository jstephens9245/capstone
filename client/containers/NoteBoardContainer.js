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
        {Object.keys(notes).map((key) => {
          const { left, top, title } = notes[key];
          return (
            <NoteWrapper
              key={key}
              id={key}
              left={left}
              top={top}
            >
              {title}
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
