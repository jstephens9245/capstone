import React, { Component } from 'react';
import {DropTarget} from 'react-dnd';
import {connect} from 'react-redux';
import {NOTE} from '../constants';
import {compose} from 'redux';
import NoteWrapper from '../components/NoteWrapper';
import DraggableNote from '../components/DraggableNote';
import shouldPureComponentUpdate from '../components/shouldPureComponentUpdate';
import snapToGrid from '../components/snapToGrid';
import {moveNote} from '../actions/note';
import store from '../store';
import flow from 'lodash/flow';


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


  renderNote(item, key) {
    return (
        <DraggableNote key={key} id={key} {...item} />
    );
  }

  render() {
    console.log('NOTEBOARD CONTAINER', this.props);
    const {movedNote, notes, connectDropTarget} = this.props;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(notes).map(key => (
        this.renderNote(notes[key], key)
        )
      )}

      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
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
