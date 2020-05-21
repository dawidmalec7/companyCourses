import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import css from './Courses.module.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CoursesList from '../../components/courses/CoursesList/CoursesList';
import AddNewCourse from '../../components/courses/AddNewCourse/AddNewCourse';

const links = [
  {
    text: 'List Of Courses',
    url: '/courses/courseslist',
  },
  {
    text: 'Create New Course',
    url: '/courses/addnewcourse',
  },
]

const Dashboard = () => (
  <Container maxWidth="lg">
    <Grid className={css.navWrapper} container spacing={3}>
      <Grid item md={12}>
      {links.map((link) => ( 
      <NavLink
            activeClassName="isActive"
            activeStyle={{ color: '#F9AA33' }}
            className={css.NavLink}
            to={link.url}
          >
            {link.text}
          </NavLink>
      ))}
      </Grid>
    </Grid>
    <Route exact path="/courses/courseslist" component={CoursesList} />
    <Route exact path="/courses/addnewcourse" component={AddNewCourse} />
  </Container>
);

export default Dashboard;
