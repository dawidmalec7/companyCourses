import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import SmallButton from '../../../UI/Buttons/SmallButton/SmallButton';
import css from './AddNewGroup.module.scss';
import { addGroup } from '../../../../actions/groups';

const AddNewGroup = ({ addSingleGroup }) => {

  const testData = {
    "name": "testowy name",
    "description": "description",
    "user_ids": [1,2,3]
  }

  return(
    <>
      <Grid className={css.grid} item md={10}>
        <NavLink
          to="/users/groups"
          className={css.backLink}
        >
          <SmallButton className={css.backButton}>back</SmallButton>
        </NavLink>
      </Grid>
      <Grid className={css.grid} item md={10}>
        <form onSubmit={() => addSingleGroup(testData)} >
          <label>
            Name
            <Input className={css.input} id="group-name" />
          </label>
          <label>
            Description
            <Input className={css.input} id="group-description" />
          </label>
          <SmallButton type="submit" className={css.addButton}>Add</SmallButton>
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

