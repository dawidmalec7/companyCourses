import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarAuthenticated from './NavbarAuthenticated';
import NavbarUnauthenticated from './NavbarUnauthenticated';

const Navbar = ({ authenticated }) => (
  <nav className="navbar">
    <div className="container">
      {
        authenticated
          ? <NavbarAuthenticated />
          : <NavbarUnauthenticated />
      }
    </div>
  </nav>
);

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
})

export default connect(mapStateToProps)(Navbar);
