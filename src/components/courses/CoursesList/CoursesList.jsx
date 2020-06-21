import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import { fetchCourses } from '../../../actions/courses';
import CourseItem from '../CourseItem/CourseItem';
import css from './CoursesList.module.scss';


const CourseList = ({ getCourses, courses: { isLoading, data = [], error } }) => {
  useEffect(() => {
    getCourses();
  }, []);

  if (isLoading) { return (<div className={css.preloader} />) }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Pagination disabled count={10} />
        </Grid>
        {
          data.map((course) => (
            <Grid item md={4} key={course.id}>
              <CourseItem course={course} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({ courses: state.courses });
const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(fetchCourses()),
})

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseList,
);
