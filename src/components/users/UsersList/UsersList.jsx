import React from 'react';

import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';
import css from './UsersList.module.scss';


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

const UsersList = () => (
  <Grid item md={10}>
    <TableContainer className={css.table}>
      <SmallButton className={css.addUserButton}>add new user</SmallButton>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={css.tableHeaderCell}>ID</TableCell>
            <TableCell className={css.tableHeaderCell}>Name</TableCell>
            <TableCell className={css.tableHeaderCell}>Surname</TableCell>
            <TableCell className={css.tableHeaderCell}>E-Mail</TableCell>
            <TableCell className={css.tableHeaderCell}>Group</TableCell>
            <TableCell className={css.tableHeaderCell}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow className={css.tableRow} key={user.id}>
              <TableCell className={css.tableBodyCell} align="left">{user.id}</TableCell>
              <TableCell className={css.tableBodyCell}>{user.name}</TableCell>
              <TableCell className={css.tableBodyCell}>{user.surname}</TableCell>
              <TableCell className={css.tableBodyCell}>{user.email}</TableCell>
              <TableCell className={css.tableBodyCell}>{user.group}</TableCell>
              <TableCell className={css.tableBodyCell}><EditIcon className={css.editIcon} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
)

export default UsersList;
