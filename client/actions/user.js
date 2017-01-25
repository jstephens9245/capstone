import axios from 'axios';

const SET_LOGIN_USER = 'SET_LOGIN_USER';

export const setLoginUser = (user) => ({
	type: SET_LOGIN_USER,
	user
});


export const createUser = (firstName, lastName, email, password) => dispatch => {
	console.log('email & pass:', {first_name: firstName, last_name: lastName, email: email, password: password });
	axios.post(`/api/user/`, {first_name: firstName, last_name: lastName, email: email, password: password })
		.then(res => console.log(res.data))
		.catch(err => console.error(err));
};



