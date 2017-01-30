import React, {Component} from 'react';
import bindHandlers from '../utils/bindHandlers';

const initState = {
  content: '',
  focused: false
};

export default class Note extends Component {

  constructor(props) {
    super(props);

    this.state = initState;

    if (!this.props.editable) {
      this.state.content = this.props.content;
    }

    bindHandlers(this,
      this.clickHandler,
      this.focusHandler,
      this.blurHandler,
      this.changeHandler
    );
    console.log(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.input.focus();
  }
  focusHandler() {
    this.state.focused = true;
  }
  blurHandler() {
    this.state.focused = false;
  }
  changeHandler(e) {
    e.preventDefault();
    this.setState({content: e.target.value});
  }

  render() {
    console.log('>>>> Note props', this.props);
    return (
      <div
        className={`c-note ${this.focused ? 'c-note--focused' : ''}`}
        onClick={this.clickHandler}>
        <div className="c-note__inner">
          <div className="c-note__content">{this.state.content}</div>
          <input type="text"
            className="c-note__input"
            ref={(input) => { this.input = input; }}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
            onChange={this.changeHandler}></input>
        </div>
      </div>
    );
  }
}
