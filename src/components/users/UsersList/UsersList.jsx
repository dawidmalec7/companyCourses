import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';
import css from './UsersList.module.scss';
import { fetchUsers, deleteUser } from '../../../actions/users';

const UsersList = ({ getUsers, removeUser, users: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getUsers();
  }, []);
  console.log(isLoading);
  if (isLoading) { return (<div>Loading...</div>); }

  return(
    <Grid item md={10}>
      <TableContainer className={css.table}>
      <NavLink
          to="/users/userlist/addnewuser"
          className={css.addNewUserLink}
        >
          <SmallButton className={css.addUserButton}>add new user</SmallButton>
        </NavLink>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={css.tableHeaderCell}>ID</TableCell>
              <TableCell className={css.tableHeaderCell}>E-Mail</TableCell>
              <TableCell className={css.tableHeaderCell}>Scope</TableCell>
              <TableCell className={css.tableHeaderCell}>Edit</TableCell>
              <TableCell className={css.tableHeaderCell}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow className={css.tableRow} key={user.id}>
                <TableCell className={css.tableBodyCell} align="left">{user.id}</TableCell>
                <TableCell className={css.tableBodyCell}>{user.attributes.email}</TableCell>
                <TableCell className={css.tableBodyCell}>{user.attributes.scope}</TableCell>
                <TableCell className={css.tableBodyCell}><EditIcon className={css.icon} /></TableCell>
                <TableCell className={css.tableBodyCell}><DeleteIcon className={css.icon} onClick={() => removeUser(user.id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
  removeUser: (UserId) => dispatch(deleteUser(UserId)),
})

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
};


  export default connect(mapStateToProps, mapDispatchToProps)(
    UsersList,
  );
