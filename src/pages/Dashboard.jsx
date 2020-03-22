import React from 'react';
import Container from '@material-ui/core/Container';
import CoursesList from '../components/courses/CoursesList';

const Dashboard = () => (
  <Container maxWidth="lg">
    <div>Dashboard</div>
    <CoursesList />
  </Container>
);

export default Dashboard;
