import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import Board from '../components/Board.jsx';

const mapStateToProps = (state) => ({board: state.board});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
