import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import SmallButton from '../../../UI/Buttons/SmallButton/SmallButton';
import css from './AddNewUser.module.scss';
import { addUser } from '../../../../actions/users';


const AddNewUser = ({ addSingleUser }) => {

    const Scopes = [
        {title: 'admin'},
        {title: 'manager'},
        {title: 'standard'},
    ]

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let test = {};
        test = data;
        console.log(test);
        addSingleUser(test);
        location.reload();
    }

    return(
        <>
        <Grid className={css.grid} item md={10}>
            <NavLink
            to="/users/userlist"
            className={css.backLink}
            >
            <SmallButton className={css.smallButton}>back</SmallButton>
            </NavLink>
        </Grid>
        <Grid className={css.grid} item md={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    inputRef={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address"
                        }
                    })}
                    label="Email"
                    name="email"
                    className={css.TextField}
                    id="email"
                />
                {/* <TextField
                    inputRef={register({ required: true })}
                    label="Scope"
                    name="scope"
                    className={css.TextField}
                    id="scope"
                /> */}
                <Autocomplete
                    id="scope"
                    options={Scopes}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 400 }}
                    renderInput={(params) => 
                        (
                            <TextField
                            {...params}
                            inputRef={register({ required: true })}
                            label="Scope"
                            name="scope"
                            className={css.TextField}
                            id="scope"
                            />
                        )
                    }
                />
            <button type="submit" className={css.smallButton} >Dodaj</button>
            </form>
        </Grid>
        </>
    )
}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = (dispatch) => ({
  addSingleUser: (data) => dispatch(addUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
    AddNewUser,
  );
  

