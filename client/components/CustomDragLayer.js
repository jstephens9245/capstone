import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import {NOTE} from '../constants';
import NoteDragPreview from './NoteDragPreview';
import snapToGrid from './snapToGrid';

// const layerStyles = {
//   position     : 'fixed',
//   pointerEvents: 'none',
//   zIndex       : 100,
//   width        : '100%',
//   height       : '100%',
// };

function getItemStyles(props) {
  console.log('GET ITEM STYLES PROPS', props);
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  if (props.snapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [ x, y ] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}


const collect = (monitor) => {
  console.log('MONITOR', monitor.getItem());
  return {
    note         : monitor.getItem(),
    itemType     : monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging   : monitor.isDragging(),
  };
};

class CustomDragLayer extends Component {


  renderItem(type, item) {
    console.log('RENDER ITEM', item);
    switch (type) {
    case NOTE:
      return (<NoteDragPreview note={item} />);
    default:
      return null;
    }
  }

  render() {
    console.log('CUSTOM DRAG LAYER PROPS', this.props);
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
        <div style={getItemStyles(this.props)}>
          {this.renderItem(itemType, item)}
        </div>
    );
  }
}


export default DragLayer(collect)(CustomDragLayer);
