import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
  } from '../actions/types/users';
  import { updateObject } from '../_helpers/utility';
  import { addUser } from '../actions/users';
  
  const initState = {
    data: [],
    isLoading: true,
    error: null,
  }
  
  
  const setIsLoading = (state, flag) => updateObject(state, { isLoading: flag });
  const setError = (state, error) => updateObject(state, { isLoading: false, error });
  const setUsers = (state, data) => updateObject(state, { isLoading: false, data });
  const deleteUser = (state, userId) => (
    updateObject(state, { isLoading: false, data: state.data.filter((item) => item.id !== userId) })
  );
  const editUser = (state, userId) => (
    updateObject(state, { isLoading: false, data: state.data.filter((item) => item.id !== userId) })
  );
  
  export default function (state = initState, action) {
    const { type, response, error } = action;
    switch (type) {
      case ADD_USER_REQUEST:
      case FETCH_USERS_REQUEST:
      case DELETE_USER_REQUEST:
        return setIsLoading(state, true)
      case FETCH_USERS_SUCCESS:
        return setUsers(state, response.data.data)
      case ADD_USER_FAILURE:
      case FETCH_USERS_FAILURE:
      case DELETE_USER_FAILURE:
        return setError(state, error.response.data.details)
      case DELETE_USER_SUCCESS:
        return deleteUser(state, action.userId)
      case EDIT_USER_SUCCESS:
          return editUser(state, action.userId)
      case EDIT_USER_FAILURE:
      case EDIT_USER_REQUEST:
  
      default:
        return state
    }
  }
  