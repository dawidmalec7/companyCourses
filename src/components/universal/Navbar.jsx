import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
  navbarLinks() {
    const { authenticated } = this.props;
    if (authenticated) {
      return [
        <li key="dashboard"><Link to="/dashboard">Dashboard</Link></li>,
        <li key="signout"><Link to="/signout">Sign out</Link></li>,
      ];
    }
    return [
      <li key="signin"><Link to="/signin">Sign in</Link></li>,
      <li key="signup"><Link to="/signup">Sign up</Link></li>,
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/"><span className="brand">Auth-app</span></Link>
          <ul>
            {this.navbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Navbar);
