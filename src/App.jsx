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
import Course from './components/courses/Course/Course';
import Quiz from './components/quiz/Quiz';

import noRequireAuth from './components/hoc/noRequireAuth';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses/Courses';
import Users from './pages/Users/Users';


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
  overrides: {
    MuiInputBase: {
      input: {
        backgroundColor: 'white',
        borderRadius: '4px',
      },
    },
    MuiInputLabel: {
      root: {
        zIndex: 250,
      },
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
    main: {
      flexGrow: 1,
    },
    content: {
      padding: '24px 0',
    },
  }));
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {authenticated && <NavbarAuthenticated />}
        <main className={classes.main}>
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

          <>
            <div className={classes.toolbar} />
            <div className={classes.content}>
              <Route exact path="/" component={requireAuth(Dashboard, ['admin', 'manager', 'standard'])} />
              <Route path="/courses" component={requireAuth(Courses, ['admin', 'manager', 'standard'])} />
              <Route path="/course/:courseId" exact="/course/:courseId" component={requireAuth(Course, ['admin', 'manager', 'standard'])} />
              <Route path="/course/:courseId/quiz/:sectionId" component={requireAuth(Quiz, ['admin', 'manager', 'standard'])} />
              <Route path="/courses/:courseId/edit" component={requireAuth(CourseForm, ['admin', 'manager'])} />
              <Route path="/users" component={requireAuth(Users, ['admin', 'manager'])} />
            </div>
          </>
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
