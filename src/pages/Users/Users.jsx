import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import css from './Users.module.scss';
import UsersList from '../../components/users/UsersList/UsersList';
import AddNewUser from '../../components/users/UsersList/AddNewUser/AddNewUser';
import Groups from '../../components/users/Groups/Groups';
import AddNewGroup from '../../components/users/Groups/AddNewGroup/AddNewGroup';
import Settings from '../../components/users/Settings/Settings';

const links = [
  {
    text: 'Users',
    url: '/users/userlist',
  },
  {
    text: 'Groups',
    url: '/users/groups',
  },
  {
    text: 'Settings',
    url: '/users/settings',
  },
]

const Users = () => (
  <Container>
    <Grid container spacing={3}>
      {links.map((link) => (
        <Grid item md={2}>
          <NavLink
            activeClassName="isActive"
            activeStyle={{ color: '#F9AA33' }}
            className={css.NavLink}
            to={link.url}
          >
            {link.text}
          </NavLink>
        </Grid>
      ))}
    </Grid>
    <Grid container spacing={12}>
      <Route exact path="/users/userlist" component={UsersList} />
      <Route exact path="/users/userlist/addnewuser" component={AddNewUser} />
      <Route exact path="/users/groups" component={Groups} />
      <Route exact path="/users/groups/addnewgroup" component={AddNewGroup} />
      <Route exact path="/users/settings" component={Settings} />
    </Grid>
  </Container>
)

export default Users;
