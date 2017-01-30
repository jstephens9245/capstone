import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import NoteContainer from '../containers/NoteContainer';

export default class CreateNote extends Component {

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
            <NoteContainer editable={true} />
          </div>
        </div>
        <hr />
        <div className="row">
          <button className="btn btn-primary block ml-auto mr-auto">Submit Note</button>
        </div>
      </div>
    );
  }
}
