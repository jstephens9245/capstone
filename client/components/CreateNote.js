import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import bindHandlers from '../utils/bindHandlers';
import NoteContainer from '../containers/NoteContainer';

const initState = {
  content: ''
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

  changeHandler(content) {
    this.setState({content});
  }

  submitHandler() {}

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
    return (
      <div className="container">
        <h1 className="center">{this.props.board ? this.props.board.name : ''}</h1>
        <hr />
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <NoteContainer
              editable={true}
              content={this.state.content}
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
