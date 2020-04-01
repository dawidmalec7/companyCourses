import React from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Lock from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import css from './Input.module.scss';


const input = ({ className, ...props }) => (
  <Grid container spacing={1} alignItems="center" className={css.mainGrid}>
    <Grid container alignItems="center" className={clsx(css.gridWithLine, css.grid)}>
      <Grid item>
        <PermIdentity className={clsx(css.icon)} color="primary" fontSize="large" />
      </Grid>
      <Grid item>
        <InputLabel htmlFor="input-with-icon-adornment">Username / Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          disableUnderline
        />
      </Grid>
    </Grid>
    <Grid container alignItems="center" className={clsx(css.grid)}>
      <Grid item>
        <Lock className={clsx(css.icon)} color="primary" fontSize="large" />
      </Grid>
      <Grid item>
        <InputLabel htmlFor="input-with-icon-adornment">Pasword</InputLabel>
        <Input
          id="input-with-icon-adornment"
          disableUnderline
        />
      </Grid>
    </Grid>
  </Grid>
)

input.propTypes = {
  className: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default withStyles()(input);
