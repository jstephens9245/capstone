import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';

export default class CreateNote extends Component {

  componentWillMount() {
    if ((!this.props.board || isEmpty(this.props.board)) && !this.props.location.query.board) {
      this.props.router.push('/myboards');
    } else if (!this.props.board || isEmpty(this.props.board)) {
      this.props.getBoard(this.props.location.query.board);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.board ? this.props.board.name : ''}</h1>
      </div>
    );
  }
}
