import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { toggleClick } from '../actions/navbar';

const mapStateToProps = function(state, ownProps) {
  return {
    sidebarToggle      : state.nav.sidebarToggle,
    boardTemplateToggle: state.nav.boardTemplateToggle
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleTemplate: (field) => dispatch(toggleClick(field))

  };
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
