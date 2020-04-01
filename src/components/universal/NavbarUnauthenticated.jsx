import React from 'react';
import { Link } from 'react-router-dom';

const NavbarUnauthenticated = () => (
  <nav className="navbar">
    <div className="container">
      <ul>
        <li key="signin"><Link to="/signin">Sign in</Link></li>
        <li key="signup"><Link to="/forgot-password">Forgot Password</Link></li>
      </ul>
    </div>
  </nav>
);


export default NavbarUnauthenticated;
