import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import bindHandlers from '../utils/bindHandlers';
import NoteContainer from '../containers/NoteContainer';
import ColorPicker from './ColorPicker';
import Color from 'color';

const initState = {
  content           : '',
  color             : Color.rgb([ 237, 208, 13 ]).hex(),
  displayColorPicker: false
};

export default class CreateNote extends Component {

  constructor(props) {
    super(props);

    this.state = initState;
    bindHandlers(this,
      this.changeHandler,
      this.submitHandler,
      this.updateColor,
      this.toggleColorPicker
    );
  }

  changeHandler(content) {
    this.setState({content});
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createNote({
      content: this.state.content,
      color  : this.state.color
    }, this.props.board.id)
      .then(() => this.setState(initState));
  }

  toggleColorPicker() {
    this.setState((prevState) => {
      return Object.assign(
        {},
        prevState,
        {displayColorPicker: !prevState.displayColorPicker});
    });
  }

  updateColor(hex) {
    this.setState({color: hex});
  }

  componentWillMount() {
    if ((!this.props.board || isEmpty(this.props.board)) && !this.props.location.query.board) {
      // If no board is selected and no board ID is provided
      // redirect to myBoards page
      this.props.router.push('/myboards');
    } else if (!this.props.board || isEmpty(this.props.board)) {
      // if no board is selected but a board ID is provided
      // select board by ID
      this.props.getBoard(this.props.location.query.board);
    }
  }

  render() {
    console.log(this.state.color, typeof this.state.color);
    return (
      <div className="container">
        <h1 className="center">{this.props.board ? this.props.board.name : ''}</h1>
        <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1" style={{fontSize: '6vw'}}>
              <NoteContainer
                editable={true}
                content={this.state.content}
                color={this.state.color}
                onChange={this.changeHandler} />
            </div>
            { this.state.displayColorPicker &&
              <div className="c-color-picker__wrapper c-color-picker__wrapper--modal">
                <ColorPicker
                  width={500}
                  color={this.state.color}
                  updateColor={this.updateColor} />
              </div>
            }
          </div>
          <hr />
          <div className="row">
              <button
                onClick={this.toggleColorPicker}
                className="btn btn-primary block">
                Change Color
              </button>
          </div>
        <hr />
        <div className="row">
          <button
            onClick={this.submitHandler}
            className="btn btn-primary block ml-auto mr-auto">
            Submit Note
          </button>
        </div>
      </div>
    );
  }
}
