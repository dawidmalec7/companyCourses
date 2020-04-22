import React from 'react';
import css from './Groups.module.scss';

import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const groups = [
  {
    id: 1,
    name: 'Admins',
  },
  {
    id: 2,
    name: 'Users',
  },
  {
    id: 3,
    name: 'Moderators',
  },
]

const Groups = () => (
  <Grid item md={6}>
    <TableContainer className={css.table}>
    <SmallButton className={css.addGroupButton}>add new group</SmallButton>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={css.tableHeaderCell}>ID</TableCell>
            <TableCell className={css.tableHeaderCell}>Group</TableCell>
            <TableCell className={css.tableHeaderCell}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((group) => (
            <TableRow className={css.tableRow} key={group.id}>
              <TableCell className={css.tableBodyCell} align="left">{group.id}</TableCell>
              <TableCell className={css.tableBodyCell}>{group.name}</TableCell>
              <TableCell className={css.tableBodyCell}><EditIcon className={css.editIcon}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  )
  
  export default Groups;