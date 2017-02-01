import React, { Component, PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import {NOTE} from '../constants';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';
import Note from './Note';

const styles = {


  cursor  : 'move',
  height  : 100,
  width   : 100,
  position: 'absolute'
};


const noteSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
};


const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging       : monitor.isDragging()
});

class NoteWrapper extends PureComponent {


  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { note, yellow} = this.props;
    const backgroundColor = yellow ? 'yellow' : 'white';

    return (
      <div style={{ ...styles, backgroundColor }}>
        <Note />
      </div>
    );
  }
}

export default NoteWrapper;
