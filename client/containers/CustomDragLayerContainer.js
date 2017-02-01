import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import NoteBoardContainer from './NoteBoardContainer';
import CustomDragLayer from '../components/CustomDragLayer';


class CustomDragLayerContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSnapToGridAfterDropChange = this.handleSnapToGridAfterDropChange.bind(this);
    this.handleSnapToGridWhileDraggingChange = this.handleSnapToGridWhileDraggingChange.bind(this);

    this.state = {
      snapToGridAfterDrop    : false,
      snapToGridWhileDragging: false,
    };
  }

  render() {
    const { snapToGridAfterDrop, snapToGridWhileDragging } = this.state;


    return (
      <div>


        <NoteBoardContainer snapToGrid={snapToGridAfterDrop} />
        <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
        <div>
        <p>
          <label htmlFor="snapToGridWhileDragging">
            <input
              id="snapToGridWhileDragging"
              type="checkbox"
              checked={snapToGridWhileDragging}
              onChange={this.handleSnapToGridWhileDraggingChange}
            />
            <small>Snap to grid while dragging</small>
          </label>
          <br />
          <label htmlFor="snapToGridAfterDrop">
            <input
              id="snapToGridAfterDrop"
              type="checkbox"
              checked={snapToGridAfterDrop}
              onChange={this.handleSnapToGridAfterDropChange}
            />
            <small>Snap to grid after drop</small>
          </label>
        </p>
      </div>
      </div>
    );
  }

  handleSnapToGridAfterDropChange() {
    this.setState({
      snapToGridAfterDrop: !this.state.snapToGridAfterDrop,

    });
  }

  handleSnapToGridWhileDraggingChange() {
    this.setState({
      snapToGridWhileDragging: !this.state.snapToGridWhileDragging,
    });
  }
}


export default CustomDragLayerContainer;
