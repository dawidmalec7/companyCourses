import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(Authentication);
}
