import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { socketConnect, socketEmit, addSocketListener, clearSocketListeners } from '../actions/socketio';

import Participants from '../components/Participants';

export class ParticipantsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalParticipants: 0,
      participants     : [],
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.joined = this.joined.bind(this);
  }

  componentWillMount() {
    if (!Object.keys(this.props.loggedInUser).length) {
      browserHistory.push('/signup');
    }
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
    this.setState({ status: 'connected'});
  }

  disconnect() {
    this.setState({ status: 'disconnected'});
  }

  joined({participants, totalParticipants}) {
    this.setState({ participants });
    this.setState({ totalParticipants});
  }

  render() {
    return (
      <Participants
        className="participants-wrapper"
        totalParticipants={this.state.totalParticipants}
        participants={this.state.participants} />
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
  clearSocketListeners: (eventName, method) => { dispatch(clearSocketListeners(eventName, method)); },
  socketEmit          : (eventName, payload) => { dispatch(socketEmit(eventName, payload)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);








