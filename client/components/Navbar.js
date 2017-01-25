import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  return (
    <div>
    <nav className="navbar navbar navbar-static-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
              aria-expanded={props.aria} aria-controls="navbar" onClick={() => { props.expandNav(); }}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className='navbar-brand' href='/'>Notion</a>
          </div>
          <div id='navbar' className={props.navClass} aria-expanded={props.aria}>
            <ul className="nav navbar-nav" onClick={() => { props.expandNav(); }}>
              <li><Link to="/">Home</Link></li>
              { !props.user ? (
                <li><Link to="/login">Login/SignUp</Link></li>
              ) : (
                <li><Link >Logout</Link></li>
              )
            }
            <li><Link to="/myboards">My Boards</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};
export default Navbar;
