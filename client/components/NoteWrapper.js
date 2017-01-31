import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import {NOTE} from '../constants';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';
import Note from './Note';

const styles = {

  padding : '0.5rem 1rem',
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


  shouldComponentUpdate(nextProps, nextState) { shouldPureComponentUpdate(nextProps, nextState); }

  render() {
    console.log('NOTEWRAPPER PROPS', this.props);
    const { note, yellow} = this.props;
    const backgroundColor = yellow ? 'yellow' : 'white';


    return (
      <div style={{ ...styles, backgroundColor }}>
        <Note color={note.color}/>
      </div>
    );
  }
}

export default NoteWrapper;
