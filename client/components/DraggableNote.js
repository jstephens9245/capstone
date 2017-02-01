import React, { Component, PureComponent} from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import {NOTE} from '../constants';
import NoteWrapper from './NoteWrapper';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';

const noteSource = {
  beginDrag(props) {
    console.log('beginProps', props);
    const { id, left, top } = props.note;
    return { id, left, top };
  },
};

//ok
function getStyles(props) {
  console.log('GET STYLES PROPS', props);
  const { left, top, isDragging } = props.note;
  console.log('BEFORE TRANSFORM TOP LEFT', left, top);
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  console.log('TRANSFORM GET STYLES', transform);

  return {
    position       : 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity        : isDragging ? 0 : 1,
    height         : isDragging ? 0 : '',
  };
}

const collect = (connector, monitor) => {
  console.log('collect in DRAGGABLE NOTE');
  return {
    connectDragSource : connector.dragSource(),
    connectDragPreview: connector.dragPreview(),
    isDragging        : monitor.isDragging()
  };
};

class DraggableNote extends PureComponent {

  //ok
  shouldComponentUpdate(nextProps, nextState) { return true; }
  //ok
  componentDidMount() {
    console.log('did mount');
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }


  render() {
    const { connectDragSource, note} = this.props;
    console.log('DRAGGABLE NOTE PROPS', note);


    return connectDragSource(
      <div style={getStyles(this.props)}>
        <NoteWrapper note={this.props.note} />
      </div>
    );
  }
}


export default DragSource(NOTE, noteSource, collect)(DraggableNote);
