import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import css from './Groups.module.scss';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';
import Modal from '@material-ui/core/Modal';
import { fetchGroups, deleteGroup, editGroup } from '../../../actions/groups';


const Groups = ({ getGroups, removeGroup, editSingleGroup, groups: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getGroups();
  }, []);

  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const testData =
    {
      "name": "WYEDYTOWANY",
      "description": "WY",
      "user_ids": [1,2,3]
    }

  if (isLoading) { return (<div className={css.preloader}></div>); }

  return (
    <>
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
                <TableCell className={css.tableBodyCell} align="left">{group.id}</TableCell>
                <TableCell className={css.tableBodyCell}>{group.attributes.name}</TableCell>
                <TableCell className={css.tableBodyCell}>{group.attributes.users.data.length}</TableCell>
                <TableCell className={css.tableBodyCell}><EditIcon onClick={handleClickOpen} className={css.Icon} /></TableCell>
                <TableCell className={css.tableBodyCell}>
                  <DeleteIcon className={css.Icon} onClick={() => removeGroup(group.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
        {/* EDIT MODAL */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit group</DialogTitle>
        <h2>Nie skończone nie będzie działać!!!</h2>
          <DialogContent>
            <TextField
              inputRef={register()}
              margin="dense"
              name="name"
              id="name"
              label="Name"
              type="name"
              fullWidth
            />
            <TextField
              inputRef={register()}
              margin="dense"
              name="name"
              id="description"
              label="Description"
              type="description"
              fullWidth
            />
            <h2>Users [1,2,3]</h2>     
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
          </DialogActions>
      </Dialog>
    </>
  )
}

const mapStateToProps = (state) => ({ groups: state.groups });
const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(fetchGroups()),
  removeGroup: (groupId) => dispatch(deleteGroup(groupId)),
  editSingleGroup: (groupId, groupData) => dispatch(editGroup(groupId, groupData)),
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
