import React, { Component } from 'react';

const Login = (props) => {
  return (
     <form className="form">
        <div className="">
          <label className="login-label"> Login with your email address </label>
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="E-mail"
          className="signup-input-field"
          id="login-email-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <div className="form-group">
          <input
          type="password"
          name="password"
          placeholder="password"
          className="signup-input-field"
          id="login-password-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <button className="login-submit-button" type="submit" onClick={(e) => { props.loginForm(e); }}> Login </button>
        <div className="signup-link-container" >
        Don't have an account? <label><a className="signup-link" onClick={() => { props.changeForm('signup'); }}> Signup</a> </label>
        </div>
      </form>
      );
};

export default Login;
