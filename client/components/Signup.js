import React, { Component } from 'react';

const Signup = (props) => {
  return (
     <form className="form">
        <div className="">
          <label className="signup-label"> Sign up with your email address </label>
        </div>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First name"
          className="input signup-input-field"
          id="signup-firstname-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <div className="form-group">
          <input type="text" name="lastName" placeholder="Last name"
          className="signup-input-field"
          id="signup-lastname-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email"
          className="signup-input-field"
          id="signup-email-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password"
          className="signup-input-field"
          id="signup-password-input-field"
          onChange={(e) => { props.handleInput(e); }} />
        </div>
        <div className="">
          <label className="signup-disclaimer">By clicking on Sign up, you agree to notion's terms & conditions and privacy policy</label>
        </div>
        <button className="signup-submit-button" type="submit" onClick={(e) => { props.submitForm(e); }}> SIGN UP </button>
         <div className="login-link-container" >
        Already have an account? <label><a className="login-link" onClick={() => { props.changeForm('login'); }}> Login</a> </label>
        </div>
      </form>
      );
};

export default Signup;
