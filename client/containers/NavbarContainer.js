import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

import { logoutUser } from '../actions/user';

const mapStateToProps = (state, ownProps) => {
  return {user: state.userReducer.loggedInUser};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

class NB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aria       : false,
      toggleClass: 'navbar-collapse collapse',
    };
    this.expandNav = this.expandNav.bind(this);
  }

  expandNav() {
    let newToggleClassValue = '';

    if (this.state.toggleClass === 'navbar-collapse collapse') {
      newToggleClassValue = 'navbar-collapse collapse in';
    } else {
      newToggleClassValue = 'navbar-collapse collapse';
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
      />
    );
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NB);

export default NavbarContainer;
