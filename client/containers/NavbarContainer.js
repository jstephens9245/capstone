import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state, ownProps) => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

class NB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aria       : false,
      toggleClass: 'navbar-collapse collapse',
      user       : props.user
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
        user={this.state.user}
      />
    );
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NB);

export default NavbarContainer;
