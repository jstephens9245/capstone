import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import bindHandlers from '../utils/bindHandlers';
import NoteContainer from '../containers/NoteContainer';
import Color from 'color';
import {genShortHash} from '../utils/stringHash';

const initState = {
  content: '',
  color  : Color.rgb([ 237, 208, 13 ]).hex().slice(1)
};

export default class CreateNote extends Component {

  constructor(props) {
    super(props);

    this.state = initState;
    bindHandlers(this,
      this.changeHandler,
      this.submitHandler
    );
  }

  componentWillMount() {
    this.props.socketConnect('board');

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

  componentWillReceiveProps({board, user}) {
    console.log('RECEIVING PROPS');
    if (!isEmpty(board) && !isEmpty(user)) {
      this.props.socketEmit('join', {
        room: genShortHash(this.props.board.id),
        name: user.first_name + user.last_name
      });
    }
  }

  componentWillUnmount() {
    this.props.clearSocketListeners();
    this.props.socketDisconnect();
  }

  render() {
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
