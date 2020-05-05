import axios from 'axios';

import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
  } from './types/users';

  export const fetchUsers = () => ({
    types: [FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE],
    shouldCallAPI: (state) => state.users.data.length === 0,
    callAPI: () => axios.get('/admin/v1/users'),
    payload: {},
  })

  export const addUser = (UserData) => ({
    types: [ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE],
    callAPI: () => axios.post('/admin/v1/users', UserData),
    payload: {},
  })
  
  export const deleteUser = (UserId) => ({
    types: [DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE],
    callAPI: () => axios.delete(`/admin/v1/users/${UserId}`),
    payload: { UserId },
  })