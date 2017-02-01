import React, { Component, PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import {NOTE} from '../constants';
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

class NoteWrapper extends Component {


  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { note, yellow} = this.props;
    let color;
    if (note) {
      color = this.props.note.color;
    }


    return (
      <div style={{ ...styles }}>
        <Note color={color} />
      </div>
    );
  }
}

export default NoteWrapper;
