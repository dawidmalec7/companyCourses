import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './AddNewGroup.module.scss';

import Grid from '@material-ui/core/Grid';
import SmallButton from '../../../UI/Buttons/SmallButton/SmallButton';
import TextField from '@material-ui/core/TextField';

const AddNewGroup = () => {
  return (
    <>
        <Grid className={css.grid} item md={10}>
            <NavLink 
                to={'/users/groups'} 
                className={css.backLink}>
                <SmallButton className={css.backButton}>back</SmallButton>
            </NavLink>
        </Grid>
        <Grid className={css.grid} item md={10}>
            DODAWANIE GRUPY
        </Grid>
    </>
  )
}

export default AddNewGroup;
