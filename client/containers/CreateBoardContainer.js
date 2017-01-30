import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import {createBoard} from '../actions/board';

const mapStateToProps = (state, ownProps) => {
  return {
    user       : state.userReducer.loggedInUser,
    boards     : state.boardReducer.allBoards,
    permissions: state.boardReducer.permissions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create: (boardName) => {
      dispatch(createBoard(boardName));
    }
  };
};

class CB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStatus: 'all'
    };

    this.filterChange = this.filterChange.bind(this);
  }

  filterChange(filterValue) {
    this.setState({filterStatus: filterValue});
  }

  render() {
    return (
      <CreateBoard
        user={this.props.user}
        boards={this.props.boards}
        permissions={this.props.permissions}
        create={this.props.create}
        filterStatus={this.state.filterStatus}
        filterChange={this.filterChange}
      />
    );
  }
}

const CreateBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CB);

export default CreateBoardContainer;
