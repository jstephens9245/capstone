import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import NoteBoardContainer from './NoteBoardContainer';
import {getBoardNotes} from '../actions/board';
import CustomDragLayerContainer from './CustomDragLayerContainer';


class BoardContainer extends Component {


  render() {
    return (
      <div className="col-xs-12" key={ this.props.board.id }>
        <h2 className="text-center">
          <span>{ this.props.board.name }</span>
        </h2>
          <div>
            <div className="screen col-xs-12">
              <CustomDragLayerContainer {...this.props}/>
            </div>
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({board: state.board.selectedBoard});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
