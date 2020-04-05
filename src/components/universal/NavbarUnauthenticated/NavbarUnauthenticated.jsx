import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import css from './NavbarUnauthenticated.module.scss';

const links = [
  {
    text: 'Log In',
    url: '/signin',
  },
  {
    text: 'Forgot Password',
    url: '/forgot-password',
  },
]

const NavbarUnauthenticated = () => (
  <nav className={css.NavBar}>
    <Container maxWidth="sm">
      <ul className={css.NavList}>
        {links.map((link) => (
          <li className={css.NavItem} key="signin">
            <NavLink
              activeClassName="isActive"
              activeStyle={{ color: '#F9AA33' }}
              className={css.NavLink}
              to={link.url}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);

export default NavbarUnauthenticated;
