import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

import { logoutUser } from '../actions/user';
import { toggleClick } from '../actions/navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    user         : state.userReducer.loggedInUser,
    sidebarToggle: state.nav.sidebarToggle,

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser   : () => dispatch(logoutUser()),
    toggleSidebar: (field) => dispatch(toggleClick(field))
  };
};

class NB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aria       : false,
      toggleClass: 'navClass navbar-collapse collapse',
    };
    this.expandNav = this.expandNav.bind(this);
  }

  expandNav() {
    let newToggleClassValue = '';

    if (this.state.toggleClass === 'navClass navbar-collapse collapse') {
      newToggleClassValue = 'navClass navbar-collapse collapse in navToggle';
    } else {
      newToggleClassValue = 'navClass navbar-collapse collapse';
    }
    this.setState({
      aria       : !this.state.aria,
      toggleClass: newToggleClassValue
    });
  }

  render() {
    return (
      <Navbar
        aria={this.state.aria}
        expandNav={this.expandNav}
        navClass={this.state.toggleClass}
        user={this.props.user}
        logoutUser={this.props.logoutUser}
        toggleSidebar={this.props.toggleSidebar}
      />
    );
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NB);

export default NavbarContainer;
