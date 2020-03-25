import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInAction } from '../../actions/auth';
import Input from '../UI/Forms/Input/Input';

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
              component={Input}
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component={Input}
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
  signIn: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
Signin.defaultProps = {
  errorMessage: false,
};

const mapStateToProps = (state) => ({ errorMessage: state.auth.error })

const reduxFormSignin = reduxForm({
  form: 'signin',
})(Signin);

export default connect(mapStateToProps, { signIn: signInAction })(reduxFormSignin);
