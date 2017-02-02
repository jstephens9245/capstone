import React, { Component, PureComponent } from 'react';
import { DragSource } from 'react-dnd';
import {NOTE} from '../constants';
import Note from './Note';

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
    const styles = {
      cursor  : 'move',
      height  : this.props.height || 100,
      width   : this.props.width || 100,
      left    : this.props.left || 0,
      top     : this.props.top || 0,
      position: 'absolute'
    };

    return (
      <div style={{ ...styles }}>
        <Note color={color} />
      </div>
    );
  }
}

export default NoteWrapper;
