import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clsx from "clsx";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Lock from "@material-ui/icons/Lock";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { signInAction } from "../../actions/auth";
import css from "./Signin.module.scss";
import AuthButton from "../UI/AuthButton/AuthButton";

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
);
class Signin extends Component {
  submit = (values) => {
    const { signIn, history } = this.props;
    signIn(values, history);
  };

  errorMessage() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return <div className="info-red">{errorMessage}</div>;
    }
    return "";
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={css.Form}>
        <form onSubmit={handleSubmit(this.submit)}>
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
              <Field
                name="email"
                component={renderTextField}
                label="Username / Email"
                InputLabelProps={{
                  className: clsx(css.TextUppercase, css.inputText),
                }}
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
              <Field
                name="password"
                component={renderTextField}
                label="Password"
                InputLabelProps={{
                  className: clsx(css.TextUppercase, css.inputText),
                }}
                className={css.TextField}
                id="password"
              />
            </Grid>
            <AuthButton text="Log In" type="submit" />
          </Container>
        </form>
        {this.errorMessage()}
      </div>
    );
  }
}

Signin.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
Signin.defaultProps = {
  errorMessage: false,
};

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

const reduxFormSignin = reduxForm({
  form: "signin",
})(Signin);

export default connect(mapStateToProps, { signIn: signInAction })(
  reduxFormSignin
);
