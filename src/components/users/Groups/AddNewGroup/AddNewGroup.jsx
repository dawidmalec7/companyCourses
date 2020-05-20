import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import {
  Grid,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import SmallButton from '../../../UI/Buttons/SmallButton/SmallButton';
import css from './AddNewGroup.module.scss';
import { addGroup } from '../../../../actions/groups';
import { fetchUsers } from '../../../../actions/users';

const AddNewGroup = ({ addSingleGroup, getUsers, userIds = [] , users: { data = [] } }) => {

  useEffect(() => {
    getUsers();
  }, []);

  const { register, handleSubmit } = useForm();

//TESTOWO DODAWANIE USEROW I SUBMIT
  const handleAddUserIcon = (e, userId) => {
      e.target.remove();
      const intUserId = parseInt(userId, 10);
      userIds.push(intUserId);
      console.log(userIds);
      return userIds;
  }
  const onSubmit = data => {
    let copyData = data;
    copyData.user_ids = userIds;
    addSingleGroup(copyData);
    //Przeładowuję bo grupy się nie ładują bez tego
    location.reload();
  }

  //END COMENT :D

  return(
    <>
      <Grid className={css.grid} item md={10}>
        <NavLink
          to="/users/groups"
          className={css.backLink}
        >
          <SmallButton className={css.smallButton}>back</SmallButton>
        </NavLink>
      </Grid>
      <Grid className={css.grid} item md={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                inputRef={register({ required: true })}
                label="Name"
                name="name"
                className={css.TextField}
                id="name"
            />
            <TextField
                inputRef={register({ required: true })}
                label="Description"
                name="description"
                className={css.TextField}
                id="description"
            />
            <ExpansionPanel className={css.heading}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Users</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={css.tableHeaderCell}>ID</TableCell>
                    <TableCell className={css.tableHeaderCell}>E-Mail</TableCell>
                    <TableCell className={css.tableHeaderCell}>Scope</TableCell>
                    <TableCell className={css.tableHeaderCell}>Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((user) => (
                    <TableRow className={css.tableRow} key={user.id}>
                      <TableCell className={css.tableBodyCell} align="left">{user.id}</TableCell>
                      <TableCell className={css.tableBodyCell}>{user.attributes.email}</TableCell>
                      <TableCell className={css.tableBodyCell}>{user.attributes.scope}</TableCell>
                      <TableCell className={css.tableBodyCell}><AddIcon onClick={(e) => handleAddUserIcon(e, user.id)} className={css.icon}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          <button type="submit" className={css.smallButton} >Dodaj</button>
        </form>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({ groups: state.groups },{ users: state.users });
const mapDispatchToProps = (dispatch) => ({
  addSingleGroup: (data) => dispatch(addGroup(data)),
  getUsers: () => dispatch(fetchUsers()),
})

// const mapDispatchToProps = (dispatch) => ({
//   getGroups: () => dispatch(fetchGroups()),
//   removeGroup: (groupId) => dispatch(deleteGroup(groupId)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(
  AddNewGroup,
);

