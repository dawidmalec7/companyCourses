import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

import { fetchUsers } from '../../../actions/users';

const users = [
  {
    id: 1,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'Admin',
  },
  {
    id: 2,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'User',
  },
  {
    id: 3,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'User',
  },
  {
    id: 4,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'User',
  },
  {
    id: 5,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'User',
  },
  {
    id: 6,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
    group: 'User',
  },
]

const UsersList = ({ getUsers, users: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getUsers();
  }, []);
  console.log(isLoading);
  if (isLoading) { return (<div>Loading...</div>); }

  return(
    <Grid item md={10}>
      <TableContainer className={css.table}>
        <SmallButton className={css.addUserButton}>add new user</SmallButton>
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
                <TableCell className={css.tableBodyCell}><DeleteIcon className={css.icon} /></TableCell>
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
})

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};


  export default connect(mapStateToProps, mapDispatchToProps)(
    UsersList,
  );
