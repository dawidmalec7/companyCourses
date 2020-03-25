import React from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import css from './Input.module.scss';

const styleSheet = (theme) => ({
  input: {
    fontSize: 20,
    textTransform: 'none',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
})

const input = ({
  className, classes, ...props
}) => (
  <Input
    {...props}
    className={`${css.inputText} ${classes.input} ${className}`}
  />
);

input.propTypes = {
  className: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
}


export default withStyles(styleSheet)(input);
