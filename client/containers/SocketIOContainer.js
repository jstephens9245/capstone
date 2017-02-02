import React, { Component } from 'react';
import {connect} from 'react-redux';

import { socketConnect, socketEmit, addSocketListener, clearSocketListeners } from '../actions/socketio';


class SocketIOContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status           : 'disconnected',
      id               : '',
      totalParticipants: 0,
      participants     : [],
    };
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.joined = this.joined.bind(this);
  }

  componentDidMount() {

    this.props.socketConnect('board');
    this.props.addSocketListener('connect', this.connect);
    this.props.addSocketListener('disconnect', this.disconnect);
    this.props.addSocketListener('joined', this.joined);
    this.props.socketEmit('join', { room: this.props.params.room, name: this.props.loggedInUser.first_name});
  }

  componentWillUnmount() {
    this.props.socketEmit('leave', this.props.params.room);
    this.props.clearSocketListeners();
  }

  connect() {
    this.setState({ status: 'connected', id: this.props.socket.id});
  }

  disconnect() {
    this.setState({ status: 'disconnected', id: this.props.socket.id});
  }

  joined({participants, totalParticipants}) {
    this.setState({ participants });
    this.setState({ totalParticipants});
  }

  render() {
    return (
      <div>
        <div> status: {this.state.status} </div>
        <div> socket id: {this.state.id} </div>
        <div> total participants: {this.state.totalParticipants} </div>
        <div> name of participants : {this.state.participants.map(participant => {
          return <span key={participant.id}> {participant.name} </span>;
        })} </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  loggedInUser: state.userReducer.loggedInUser,
  socket      : state.socket
});

const mapDispatchToProps = (dispatch) => ({
  socketConnect       : (namespace) => { dispatch(socketConnect(namespace)); },
  addSocketListener   : (eventName, method) => { dispatch(addSocketListener(eventName, method)); },
  clearSocketListeners: (eventName, method) => { dispatch(clearSocketListeners()); },
  socketEmit          : (eventName, payload) => { dispatch(socketEmit(eventName, payload)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketIOContainer);
