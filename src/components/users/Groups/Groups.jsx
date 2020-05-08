import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import css from './Groups.module.scss';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';

import { fetchGroups, deleteGroup, editGroup } from '../../../actions/groups';


const Groups = ({ getGroups, removeGroup, editSingleGroup, groups: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getGroups();
  }, []);
  console.log(isLoading);

  const testData =
    {
      "name": "EDYCJA",
      "description": "EDYCJA",
      "user_ids": [1,2,3]
    }

  const testEditFunc = data => {
    alert("NIE SKOŃCZONE");
    console.log(data,testData);
    editSingleGroup(data,testData);
  }

  if (isLoading) { return (<div>Loading...</div>); }

  return (
    <Grid item md={10}>
      <TableContainer className={css.table}>
        <NavLink
          to="/users/groups/addnewgroup"
          className={css.addNewGroupLink}
        >
          <SmallButton className={css.addGroupButton}>add new group</SmallButton>
        </NavLink>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={css.tableHeaderCell}>ID</TableCell>
              <TableCell className={css.tableHeaderCell}>Group</TableCell>
              <TableCell className={css.tableHeaderCell}>Users</TableCell>
              <TableCell className={css.tableHeaderCell}>Edit</TableCell>
              <TableCell className={css.tableHeaderCell}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((group) => (
              <TableRow className={css.tableRow} key={group.id}>
                {console.log(group)}
                <TableCell className={css.tableBodyCell} align="left">{group.id}</TableCell>
                <TableCell className={css.tableBodyCell}>{group.attributes.name}</TableCell>
                <TableCell className={css.tableBodyCell}>{group.attributes.users.data.length}</TableCell>
                <TableCell className={css.tableBodyCell}><EditIcon onClick={() => testEditFunc(group.id)} className={css.Icon} /></TableCell>
                <TableCell className={css.tableBodyCell}>
                  <DeleteIcon className={css.Icon} onClick={() => removeGroup(group.id)} />
                </TableCell>
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
  removeGroup: (groupId) => dispatch(deleteGroup(groupId)),
  editSingleGroup: (groupId) => dispatch(editGroup(groupId)),
})

Groups.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
  editSingleGroup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Groups,
);
