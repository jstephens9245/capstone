import React, { Component } from 'react';
import {connect} from 'react-redux';
import { io } from '../Routes.jsx';


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
    this.emit = this.emit.bind(this);
  }

  componentDidMount() {
    /* declare listeners for initial component mount */
    this.socket = io('http://localhost:3030/board');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.emit('join', {room: this.props.params.room, name: this.props.loggedInUser.first_name });
    this.socket.on('joined', this.joined);
  }

  componentWillUnmount() {
    /* remove listeners when leaving page */
    this.socket.emit('leave', this.props.params.room);
    this.socket.removeListener('connect', this.connect);
    this.socket.removeListener('joined', this.joined);
    this.socket.removeListener('disconnect', this.disconnect);
  }

  connect() {
    this.setState({ status: 'connected', id: this.socket.id});
  }

  disconnect() {
    this.setState({ status: 'disconnected', id: this.socket.id});
  }

  joined({participants, totalParticipants}) {
    this.setState({ participants });
    this.setState({ totalParticipants});
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
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
  loggedInUser: state.userReducer.loggedInUser
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketIOContainer);


