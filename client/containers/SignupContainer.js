import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {createUser} from '../actions/user';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName : '',
      email    : '',
      password : '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="signup-form-container">
      <form className="form" onSubmit={(e) => { this.submitForm(e); }}>
        <div className="form-group">
          <label className="form-label" >First Name</label>
          <input type="text" name="firstName" placeholder="First name"
          className="input"
          onChange={(e) => { this.handleInput(e); }} />
        </div>
        <div className="form-group">
          <label className="form-label" >Last Name</label>
          <input type="text" name="lastName" placeholder="Last name"
          className="input"
          onChange={(e) => { this.handleInput(e); }} />
        </div>
        <div className="form-group">
          <label className="form-label" > E-mail </label>
          <input type="email" name="email" placeholder="E-mail"
          className="input"
          onChange={(e) => { this.handleInput(e); }} />
        </div>
        <div className="form-group">
          <label className="form-label" > Password </label>
          <input type="password" name="password" placeholder="password"
          className="input"
          onChange={(e) => { this.handleInput(e); }} />
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createUser: (firstName, lastName, email, password) =>
  dispatch(createUser(firstName, lastName, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
