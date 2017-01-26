import axios from 'axios';
import {browserHistory} from 'react-router';

import { SET_LOGIN_USER } from '../constants' ;
import { REMOVE_LOGIN_USER } from '../constants';


export const setLoginUser = (user) => ({
  type: SET_LOGIN_USER,
  user
});

export const removeLoginUser = () => ({
  type: REMOVE_LOGIN_USER,
});




export const createUser = (firstName, lastName, email, password) => dispatch => {
  axios.post('/api/user/', {first_name: firstName, last_name: lastName, email, password })
    .then(res => {
      if (res.data.message) {
        return; //email already exists
      } else {
        dispatch(setLoginUser(res.data));
        browserHistory.push('/');
      }
    })
    .catch(err => console.error(err));
};

export const loginUser = (email, password) => dispatch => {
  axios.post('/api/auth/', { email: email, password: password })
    .then(res => {
      if (res.data.message) {
        return; // password is incorrect
      } else {
        dispatch(setLoginUser(res.data));
        browserHistory.push('/');
      }
    })
    .catch(err => console.error(err));
};

export const logoutUser = () => dispatch => {
  axios.delete('/api/auth/logout')
  .then(res => dispatch(removeLoginUser(res.data)))
  .catch(err => console.error(err));
};

/* check login state by calling server and checking user sessions */
export const checkLoginStatus = () => dispatch => {
  axios.get('/api/auth/session/')
  .then(res => dispatch(setLoginUser(res.data)))
  .catch(err => console.error(err));
};



