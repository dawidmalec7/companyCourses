import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'

import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  Grid,
  TextField,
} from '@material-ui/core';

import Fab from '@material-ui/core/Fab';

import { addCourse } from '../../../actions/courses';
import { fetchGroups } from '../../../actions/groups';

import css from './AddNewCourse.module.scss';

const AddNewCourse = ({ addSingleCourse, getGroups, groups: { data = [] }}) => {
  useEffect(() => {
    getGroups();
  }, []);

const { register, handleSubmit } = useForm();

const onSubmit = data => {
    let dataToSend = {};
    const groupId = data.group;
    dataToSend.name = data.name;
    dataToSend.description = data.description;

    addSingleCourse(groupId,dataToSend);
    location.reload();
}

  return(
    <>
      <Grid item md={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
              inputRef={register({ required: true })}
              label="name"
              name="name"
              className={css.TextField}
              id="name"
              variant="standard"
          />
          <TextField
              inputRef={register({ required: true })}
              label="description"
              name="description"
              className={css.TextField}
              id="description"
              variant="standard"
          />
          <Autocomplete
              id="group"
              options={data}
              getOptionLabel={(group) => group.id}
              style={{ width: 400 }}
              renderInput={(params) => 
              (
                  <TextField
                  {...params}
                  inputRef={register({ required: true })}
                  label="Group"
                  name="group"
                  className={css.TextField}
                  id="group"
                  />
              )
              }
                />
            <Fab color='secondary' variant="extended" type="submit" className={css.smallButton}>Add</Fab>
        </form>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({ courses: state.courses },{ groups: state.groups });
const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(fetchGroups()),
  addSingleCourse: (id, data) => dispatch(addCourse(id, data)),
})

AddNewCourse.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired,
  addSingleCourse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddNewCourse,
);