import React from 'react';
import Container from '@material-ui/core/Container';
import CoursesList from '../../components/courses/CoursesList';

const Dashboard = () => (
  <Container maxWidth="lg">
    <CoursesList />
  </Container>
);

export default Dashboard;
