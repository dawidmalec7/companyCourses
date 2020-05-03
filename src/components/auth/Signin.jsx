import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'

import clsx from 'clsx';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Lock from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { signInAction } from '../../actions/auth';
import css from './Signin.module.scss';
import AuthButton from '../UI/Buttons/AuthButton/AuthButton';

const SignInForm = ({
  signIn, errorMessage,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    signIn(values);
  };

  const errorMessageEl = () => {
    if (errorMessage) {
      return <div className="info-red">{errorMessage}</div>;
    }
    return '';
  }

  return (
    <div className={css.Form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm">
          <Grid
            container
            className={clsx(css.gridWithLine, css.grid, css.gridTop)}
          >
            <PermIdentity
              className={clsx(css.icon)}
              color="primary"
              fontSize="large"
            />
            <TextField
              inputRef={register}
              label="Username / Email"
              InputLabelProps={{
                className: clsx(css.TextUppercase, css.inputText),
              }}
              name="email"
              className={css.TextField}
              id="email"
            />
          </Grid>
          <Grid container className={clsx(css.grid, css.gridBottom)}>
            <Lock
              className={clsx(css.icon)}
              color="primary"
              fontSize="large"
            />
            <TextField
              inputRef={register}
              type="password"
              label="Password"
              InputLabelProps={{
                className: clsx(css.TextUppercase, css.inputText),
              }}
              className={css.TextField}
              name="password"
              id="password"
            />
          </Grid>
          <AuthButton text="Log In" type="submit" />
        </Container>
      </form>
      {errorMessageEl()}
    </div>
  );
}

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
SignInForm.defaultProps = {
  errorMessage: false,
};

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

export default connect(mapStateToProps, { signIn: signInAction })(
  SignInForm,
);
