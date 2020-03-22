import React from 'react';
import { Link } from 'react-router-dom';

const NavbarUnauthenticated = () => (
  <nav className="navbar">
    <div className="container">
      <ul>
        <li key="signin"><Link to="/signin">Sign in</Link></li>
        <li key="signup"><Link to="/signup">Sign up</Link></li>
      </ul>
    </div>
  </nav>
);


export default NavbarUnauthenticated;
