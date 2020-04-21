import React from 'react';
import css from './UsersList.module.scss';

import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const users = [
  {
    id: 1,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
  {
    id: 2,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
  {
    id: 3,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
  {
    id: 4,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
  {
    id: 5,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
  {
    id: 6,
    name: 'Lukasz',
    surname: 'Sroga',
    email: 'a@b.com',
  },
]

const UsersList = () => (
  <Grid item md={10}>
    <TableContainer className={css.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={css.tableHeaderCell}>ID</TableCell>
            <TableCell className={css.tableHeaderCell}>Name</TableCell>
            <TableCell className={css.tableHeaderCell}>Surname</TableCell>
            <TableCell className={css.tableHeaderCell}>E-Mail</TableCell>
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
              <TableCell className={css.tableBodyCell}><EditIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
)
  
  export default UsersList;