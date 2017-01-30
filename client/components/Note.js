import React, {Component} from 'react';
import bindHandlers from '../utils/bindHandlers';
import Color from 'color';

const initState = {
  focused: false,
  color  : Color.rgb([ 237, 208, 13 ])
};

export default class Note extends Component {

  constructor(props) {
    super(props);

    this.state = initState;

    if (this.props.color && Array.isArray(this.props.color)) {
      this.state.color = Color.rgb(this.props.color);
    }

    bindHandlers(this,
      this.clickHandler,
      this.focusHandler,
      this.blurHandler,
      this.changeHandler
    );
  }

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.color)
      && nextProps.color.toString() !== this.props.color.toString()) {
      this.setState({color: Color.rgb(nextProps.color)});
    }
  }

  clickHandler(e) {
    e.preventDefault();
    this.input.focus();
  }
  focusHandler() {
    this.setState({focused: true});
  }
  blurHandler() {
    this.setState({focused: false});
  }
  changeHandler(e) {
    e.preventDefault();
    this.props.onChange(e.target.value);
  }

  render() {
    const noteStyle = {
      backgroundColor: this.state.color.rgb().string(),
      color          : this.state.color.rotate(180).rgb().string()
    };
    return (
      <div
        className={`c-note ${this.state.focused ? 'c-note--focused' : ''}`}
        onClick={this.clickHandler}
        style={noteStyle}>
        <div className="c-note__inner">
          <div className="c-note__content">{this.props.content}</div>
          { this.props.editable &&
            <input type="text"
              className="c-note__input"
              ref={(input) => { this.input = input; }}
              onFocus={this.focusHandler}
              onBlur={this.blurHandler}
              onChange={this.changeHandler}></input>
          }
        </div>
      </div>
    );
  }
}
