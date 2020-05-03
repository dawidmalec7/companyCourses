import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent, authorize) {
  class Authentication extends Component {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      this.handleAuth();
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillUpdate() {
      this.handleAuth();
    }

    handleAuth() {
      const {
        authenticated, history, role,
      } = this.props;

      if (!authenticated) {
        history.push('/signin');
      } else {
        const roleVar = typeof (role) !== 'undefined' ? role : localStorage.getItem('role')
        const isAuthorized = authorize.includes(roleVar);
        if (!isAuthorized) { history.push('/404'); }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    role: PropTypes.string.isRequired,
    authorize: PropTypes.array.isRequired,
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
      role: state.auth.role,
    };
  }
  return connect(mapStateToProps)(Authentication);
}
