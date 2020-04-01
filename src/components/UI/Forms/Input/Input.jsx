import React from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const input = ({ className, ...props }) => (
  <div />
)

input.propTypes = {
  className: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default withStyles()(input);
