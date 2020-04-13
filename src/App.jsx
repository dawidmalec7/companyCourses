/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { hot } from 'react-hot-loader'
import Grid from '@material-ui/core/Grid';

import NavbarAuthenticated from './components/universal/NavbarAuthenticated/NavbarAuthenticated';
import NavbarUnauthenticated from './components/universal/NavbarUnauthenticated/NavbarUnauthenticated';
import Signin from './components/auth/Signin';
import ForgotPassword from './components/auth/ForgotPassword';
import requireAuth from './components/hoc/RequireAuth';
import CourseForm from './components/courses/CourseForm/CourseForm';

import noRequireAuth from './components/hoc/noRequireAuth';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses/Courses';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F9AA33',
    },
    secondary: {
      main: '#232F34',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
  },

})

const App = ({ authenticated }) => {
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      backgroundColor: '#232F34',
      minHeight: '100vh',
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
    },
  }));
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        { authenticated && <NavbarAuthenticated /> }
        <main className={classes.content}>
          {!authenticated && (
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
            >
              <NavbarUnauthenticated />
              <Route path="/signin" component={noRequireAuth(Signin)} />
              <Route path="/forgot-password" component={noRequireAuth(ForgotPassword)} />
            </Grid>
          )}
          {authenticated && (
            <>
              <div className={classes.toolbar} />
              <Route exact path="/" component={requireAuth(Dashboard, ['admin'])} />
              <Route exact path="/courses" component={requireAuth(Courses, ['admin'])} />
              <Route path="/courses/:courseId/edit" component={requireAuth(CourseForm, ['admin'])} />
            </>
          )}
        </main>
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
})

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}
export default
process.env.NODE_ENV === 'development'
  ? hot(module)(connect(mapStateToProps)(App))
  : connect(mapStateToProps)(App)
