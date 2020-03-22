import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.push('/');
      }
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillUpdate() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  NotAuthentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}
