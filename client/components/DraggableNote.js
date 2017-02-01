import React, {PureComponent} from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import {NOTE} from '../constants';
import NoteWrapper from './NoteWrapper';

const noteSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
};

//ok
function getStyles(props) {
  const { left, top, isDragging } = props;
  const transform = `translate3d(${left}px, ${top}px, 0)`;

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
  return {
    connectDragSource : connector.dragSource(),
    connectDragPreview: connector.dragPreview(),
    isDragging        : monitor.isDragging()
  };
};

class DraggableNote extends PureComponent {

  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }


  render() {
    const { connectDragSource} = this.props;
    console.log('DN', this.props);


    return connectDragSource(
      <div style={getStyles(this.props)}>
        <NoteWrapper note={this.props} />
      </div>
    );
  }
}


export default DragSource(NOTE, noteSource, collect)(DraggableNote);
