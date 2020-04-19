import React from 'react';
import css from './Quiz.module.scss';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Quiz = () => (
    <Container maxWidth="sm">
        <form className={css.mainForm} noValidate autoComplete="off">
            <Grid className={css.grid}>
                <TextField className={css.input} label="Question" variant="outlined" required/>
            </Grid>
            <Grid className={css.grid}>
                <TextField className={css.input} label="Answers" variant="outlined" required/>
            </Grid>
            <Grid className={css.grid}>
                <TextField className={css.input} variant="outlined" label="Comment" /> 
            </Grid>
        </form>
        <Button variant="contained" color="primary">
              Add
        </Button>
    </Container>
  )


export default Quiz;
