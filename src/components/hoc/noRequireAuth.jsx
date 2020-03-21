import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentDidMount() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.push('/secret');
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
