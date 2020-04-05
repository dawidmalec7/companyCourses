import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import css from './Signin.module.scss';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
class ForgotPassword extends Component {
    submit = (values) => {
      // const { ForgotPassword, history } = this.props;
      // ForgotPassword(values, history);
    };

    errorMessage() {
      const { errorMessage } = this.props;
      if (errorMessage) {
        return <div className="info-red">{errorMessage}</div>;
      }
      return '';
    }

    render() {
      const { handleSubmit } = this.props;

      return (
        <div className="form">
          <div className="container">
            <form onSubmit={handleSubmit(this.submit)}>
              <Container maxWidth="sm">
                <Typography className={css.smallText}>Enter the email address you used to create your account and we will email you a link to reset your password.</Typography>
                <Grid container className={clsx(css.gridWithLine, css.grid, css.gridBorderFull)}>
                  <PermIdentity className={clsx(css.icon)} color="primary" fontSize="large" />
                  <Field
                    name="email"
                    component={renderTextField}
                    label="Email"
                    InputLabelProps={{ className: clsx(css.TextUppercase, css.inputText) }}
                    className={css.TextField}
                    id="email"
                  />
                </Grid>
                <Button type="Submit" variant="contained" className={css.HugeButton} color="primary">
                  Send Email
                </Button>
              </Container>
            </form>
            {this.errorMessage()}
          </div>
        </div>
      );
    }
}

ForgotPassword.propTypes = {
  history: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
ForgotPassword.defaultProps = {
  errorMessage: false,
};

const mapStateToProps = (state) => ({ errorMessage: state.auth.error })

const reduxFormForgotPassword = reduxForm({
  form: 'ForgotPassword',
})(ForgotPassword);

export default connect(mapStateToProps)(reduxFormForgotPassword);
