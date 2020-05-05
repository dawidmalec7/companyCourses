import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import SmallButton from '../../../UI/Buttons/SmallButton/SmallButton';
import css from './AddNewGroup.module.scss';
import { addGroup } from '../../../../actions/groups';

const AddNewGroup = ({ addSingleGroup }) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    // To jest mocno testowe
    let testUser_ids = {};
    testUser_ids = data;
    testUser_ids.user_ids = [1,2,3];
    addSingleGroup(testUser_ids);
    //Przeładowuję bo grupy się nie ładują bez tego
    alert("The group has been added!")
    location.reload();
  }

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
          <button type="submit" className={css.smallButton} >Dodaj</button>
        </form>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({ groups: state.groups });
const mapDispatchToProps = (dispatch) => ({
  addSingleGroup: (testData) => dispatch(addGroup(testData)),
})

// const mapDispatchToProps = (dispatch) => ({
//   getGroups: () => dispatch(fetchGroups()),
//   removeGroup: (groupId) => dispatch(deleteGroup(groupId)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(
  AddNewGroup,
);

