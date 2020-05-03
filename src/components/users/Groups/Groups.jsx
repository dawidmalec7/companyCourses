import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import css from './Groups.module.scss';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';

import { fetchGroups } from '../../../actions/groups';


const Groups = ({ getGroups, groups: { isLoading, data = [] } }) => {
  useEffect(() => {
    getGroups()
  });

  if (isLoading) { return (<div>Loading...</div>); }

  return (
    <Grid item md={10}>
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
            {data.map((group) => (
              <TableRow className={css.tableRow} key={group.id}>
                <TableCell className={css.tableBodyCell} align="left">{group.id}</TableCell>
                <TableCell className={css.tableBodyCell}>{group.attributes.name}</TableCell>
                <TableCell className={css.tableBodyCell}><EditIcon className={css.editIcon} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

const mapStateToProps = (state) => ({ groups: state.groups });
const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(fetchGroups()),
})

Groups.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Groups,
);
