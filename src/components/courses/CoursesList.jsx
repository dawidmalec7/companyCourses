import React, { useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import CourseItem from './CourseItem';
import { fetchCourses, addCourse } from '../../actions/courses';

import SmallButton from '../UI/Buttons/SmallButton/SmallButton';
import css from './CoursesList.module.scss';
import AddNewCourse from './AddNewCourse/AddNewCourse';

const coursesTestData = [
  {
    _id: '5e77794bfed6ffb8d7975490',
    index: 0,
    name: 'Latisha',
    isActive: false,
    picture: 'http://placehold.it/512x512',
  },
  {
    _id: '5e77794bbc22f4a8dddd3ae2',
    index: 1,
    name: 'Cole',
    isActive: true,
    picture: 'http://placehold.it/512x512',
  },
  {
    _id: '5e77794b6f01dfc759ebf61d',
    index: 2,
    name: 'Selena',
    isActive: true,
    picture: 'http://placehold.it/512x512',
  },
  {
    _id: '5e77794b81997cdee03993e2',
    index: 3,
    name: 'Estes',
    isActive: false,
    picture: 'http://placehold.it/512x512',
  },
  {
    _id: '5e77794b85205358d08fac12',
    index: 4,
    name: 'Slater',
    isActive: false,
    picture: 'http://placehold.it/512x512',
  },
  {
    _id: '5e77794b47f6bb360ef6bb5d',
    index: 5,
    name: 'Pollard',
    isActive: true,
    picture: 'http://placehold.it/512x512',
  },
];

const CourseList = ({ addSingleCourse, getCourses, courses: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getCourses();
  }, []);

  if (isLoading) { return (<div>Loading...</div>); }

  const dataToTest = {
    "name": "Działa",
    "description": "jakotako"
  }

  const addTestCourse = (id, data) => {
    addSingleCourse(id,data);
    location.reload();
  }

  return(
    <Grid container spacing={3}>
      <Grid item md={12}>
        <button onClick={() => (addTestCourse(90,dataToTest))}>DODAJ TESTOWY KURS</button>
      </Grid>
      {
        data.map((course) => (
          <Grid item md={4} key={course.id}>
            <CourseItem course={course} />
          </Grid>
        ))
      }
    </Grid>
)}

const mapStateToProps = (state) => ({ courses: state.courses });
const mapDispatchToProps = (dispatch) => ({
  addSingleCourse: (id, data) => dispatch(addCourse(id, data)),
  getCourses: () => dispatch(fetchCourses()),
})

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseList,
);
