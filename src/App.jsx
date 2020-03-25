/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { hot } from 'react-hot-loader'
import Navbar from './components/universal/Navbar';
import Signin from './components/auth/Signin';
// import Signup from './components/auth/Signup';
import requireAuth from './components/hoc/RequireAuth';
import noRequireAuth from './components/hoc/noRequireAuth';
import Dashboard from './pages/Dashboard';

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: '#232F34',
      height: '100vh',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/signin" component={noRequireAuth(Signin)} />
        {/* <Route path="/signup" component={noRequireAuth(Signup)} /> */}
        {/* <Route path="/signout" component={requireAuth(Signout)} /> */}
        <Route exact path="/" component={requireAuth(Dashboard)} />
      </main>
    </div>
  )
}
export default process.env.NODE_ENV === 'development' ? hot(module)(App) : App
