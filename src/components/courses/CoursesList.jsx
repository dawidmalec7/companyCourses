import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseItem from './CourseItem';

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

const CourseList = () => (
  <Grid container spacing={3}>
    {
      coursesTestData.map((course) => (
        <Grid item md={4}>
          <CourseItem course={course} />
        </Grid>
      ))
    }
  </Grid>
)

export default CourseList;
