import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({board: state.board});

const mapDispatchToProps = (dispatch) => ({});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps);

export default BoardContainer;
