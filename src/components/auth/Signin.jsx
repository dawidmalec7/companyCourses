import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInAction } from '../../actions/auth';

class Signin extends Component {
  submit = (values) => {
    const { signInAction: signInActionProps, history } = this.props;
    signInActionProps(values, history);
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
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="blue">
              Sign In
            </button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  signInAction: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
Signin.defaultProps = {
  errorMessage: false,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: 'signin',
})(Signin);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);
