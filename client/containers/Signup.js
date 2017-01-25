import React, { Component } from 'react';



class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.submitForm = this.submitForm.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	submitForm(e) {
		console.log('submit form');
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
					<input type="text" name="first_name" placeholder="First name"
					className="input"
					onChange={(e) => { this.handleInput(e); }} />
				</div>
				<div className="form-group">
					<label className="form-label" >Last Name</label>
					<input type="text" name="last_name" placeholder="Last name"
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
					<label className="form-label" > E-mail </label>
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
