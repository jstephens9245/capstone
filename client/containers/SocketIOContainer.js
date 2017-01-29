import React, { Component } from 'react';
import io from 'socket.io-client';


export default class SocketIOContainer extends Component {

  static randomNameSpace() {

  }

  constructor(props) {
    super(props);
    this.state = {
      status: 'disconnected',
      id    : ''
    };
    this.connect = this.connect.bind(this);
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on('connect', this.connect);
  }

  connect() {
    this.setState({ status: 'connected', id: this.socket.id});
  }

  render() {
    return (
      <div>
        <div>status: {this.state.status} </div>
        <div> id: {this.state.id} </div>
      </div>
    );
  }
}
