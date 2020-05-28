import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
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

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';

import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';
import css from './UsersList.module.scss';
import { fetchUsers, deleteUser, editUser } from '../../../actions/users';

const UsersList = ({ getUsers, removeUser, editSingleUser, users: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const { register, handleSubmit } = useForm();

  const [open, setOpen] = React.useState(false);
  const [userToEdit, setUserToEdit] = React.useState(null);

  const Scopes = [
    {title: 'admin'},
    {title: 'manager'},
    {title: 'standard'},
  ]

  const handleClickOpen = (user) => {
    setOpen(true);
    setUserToEdit(user);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = data => {
    editSingleUser(userToEdit.id,data);
  }


  if (isLoading) { return (<div className={css.preloader}></div>); }

  return(
    <>
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
                <TableCell className={css.tableBodyCell}><EditIcon className={css.icon} onClick={() => handleClickOpen(user)} /></TableCell>
                <TableCell className={css.tableBodyCell}><DeleteIcon className={css.icon} onClick={() => removeUser(user.id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
         {/* EDIT MODAL */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit user {userToEdit === null ? '' : userToEdit.id}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
                inputRef={register()}
                defaultValue={userToEdit === null ? '' : userToEdit.attributes.email}
                label="Email"
                name="email"
                className={css.TextField}
                id="email"
            />
            <Autocomplete
                id="scope"
                options={Scopes}
                getOptionLabel={(option) => option.title}
                style={{ width: 400 }}
                renderInput={(params) => 
                    (
                      <TextField
                      {...params}
                      inputRef={register({ required: true })}
                      label="Scope"
                      name="scope"
                      className={css.TextField}
                      id="scope"
                      />
                    )
                }
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
    </Dialog>             
    </>
  )}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
  removeUser: (UserId) => dispatch(deleteUser(UserId)),
  editSingleUser: (userId, userData) => dispatch(editUser(userId, userData)),
})

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
};


  export default connect(mapStateToProps, mapDispatchToProps)(
    UsersList,
  );
