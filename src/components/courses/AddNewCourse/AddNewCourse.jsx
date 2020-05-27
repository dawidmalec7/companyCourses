import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { addCourse } from '../../../actions/courses';
import css from './AddNewCourse.module.scss';

const AddNewCourse = ({ addSingleCourse}) => {

  const { register, handleSubmit } = useForm();

  const scopes = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
]

  const onSubmit = data => {
    //wrzucona na stałe grupa o id 93
    const id = 93;
    console.log(data);
    addSingleCourse(id,data);
    location.reload();
}

  return(
    <>
      <Grid item md={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
              inputRef={register({
                required: "Required",
              })}
              label="name"
              name="name"
              className={css.TextField}
              id="name"
          />
          <TextField
              inputRef={register({
                required: "Required",
              })}
              label="description"
              name="description"
              className={css.TextField}
              id="description"
          />
          <Autocomplete
            id="group"
            options={scopes}
            getOptionLabel={(option) => option.id}
            style={{ width: 400 }}
            renderInput={(params) => 
                (
                    <TextField
                    {...params}
                    label="Group"
                    name="group"
                    className={css.TextField}
                    id="group"
                    />
                )
            }
              />
            <h2>Warning! Na stałe przypisana grupa id 93 w której są wszyscy użytkownicy</h2>
            <button type="submit" className={css.smallButton} >Dodaj</button>
        </form>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({ courses: state.courses });
const mapDispatchToProps = (dispatch) => ({
  addSingleCourse: (id, data) => dispatch(addCourse(id, data)),
})

AddNewCourse.propTypes = {
  courses: PropTypes.object.isRequired,
  addSingleCourse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddNewCourse,
);