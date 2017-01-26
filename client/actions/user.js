import axios from 'axios';

import { SET_LOGIN_USER } from '../constants' ;


export const setLoginUser = (user) => ({
  type: SET_LOGIN_USER,
  user
});


export const createUser = (firstName, lastName, email, password) => dispatch => {
  axios.post('/api/user/', {first_name: firstName, last_name: lastName, email, password })
    .then(res => dispatch(setLoginUser(res.data)))
    .catch(err => console.error(err));
};

export const loginUser = (email, password) => dispatch => {
  axios.post('/api/auth/', { email: email, password: password })
    .then(res => dispatch(setLoginUser(res.data)))
    .catch(err => console.error(err));
};



