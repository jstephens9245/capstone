import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { socketConnect, socketEmit, addSocketListener, removeSocketListener } from '../actions/socketio';

class ParticipantsContainer extends Component {

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
    this.props.removeSocketListener('connect', this.connect);
    this.props.removeSocketListener('joined', this.joined);
    this.props.removeSocketListener('disconnect', this.disconnect);
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
      <div className="participants-container">
          <div className="participant-number-container">
            <span className="participant-number">
              <i className="glyphicon glyphicon-globe"></i>{this.state.totalParticipants} Users Online
            </span>
          </div>
          <div className="participant-list-container">
            <ul className="participant-list">
              {this.state.participants.map(participant => {
                return <li className="participant-item" key={participant.id}>
                          <div className="participant">
                          <i className="glyphicon glyphicon-user"></i>
                            {participant.name}
                          </div>
                        </li>;
              })}
            </ul>
          </div>
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
  removeSocketListener: (eventName, method) => { dispatch(removeSocketListener(eventName, method)); },
  socketEmit          : (eventName, payload) => { dispatch(socketEmit(eventName, payload)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);








