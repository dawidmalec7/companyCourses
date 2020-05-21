import React from 'react';
import Container from '@material-ui/core/Container';
import css from './Dashboard.module.scss';

const Dashboard = () => (
  <Container maxWidth="lg">
    <div>
      <div className={css.preloader}></div>
    </div>
  </Container>
);

export default Dashboard;
