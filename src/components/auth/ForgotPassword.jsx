import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form'
import css from './Signin.module.scss';
import AuthButton from '../UI/Buttons/AuthButton/AuthButton';

const ForgotPassword = ({ errorMessage }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => { }


  const errorMessageEl = () => {
    if (errorMessage) {
      return <div className="info-red">{errorMessage}</div>;
    }
    return '';
  }


  return (
    <div className="form">
      <div className="container">
        <form onSubmit={() => onSubmit()}>
          <Container maxWidth="sm">
            <Typography className={css.smallText}>
              Enter the email address you used to create your account and we
              will email you a link to reset your password.
            </Typography>
            <Grid
              container
              className={clsx(css.gridWithLine, css.grid, css.gridBorderFull)}
            >
              <PermIdentity
                className={clsx(css.icon)}
                color="primary"
                fontSize="large"
              />
              <TextField
                inputRef={register}
                label="Email"
                InputLabelProps={{
                  className: clsx(css.TextUppercase, css.inputText),
                }}
                name="email"
                className={css.TextField}
                id="email"
              />
            </Grid>
            <AuthButton text="Send Email" type="submit" />
          </Container>
        </form>
        {errorMessageEl()}
      </div>
    </div>
  );
}

ForgotPassword.propTypes = {
  history: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
ForgotPassword.defaultProps = {
  errorMessage: false,
};

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

export default connect(mapStateToProps)(ForgotPassword);
