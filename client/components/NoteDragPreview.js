import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';
import NoteWrapper from './NoteWrapper';


const styles = {
  display        : 'inline-block',
  transform      : 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
};


export default class NoteDragPreview extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      tickTock: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      tickTock: !this.state.tickTock,
    });
  }

  render() {

    console.log('DRAG PREVIEW PROPS', this.props);
    const { tickTock } = this.state;

    return (
      <div style={styles}>
        <NoteWrapper yellow={tickTock} />
      </div>
    );
  }


}
