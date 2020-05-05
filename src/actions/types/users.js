import { createRequestActionType, createSuccessActionType, createFailureActionType } from '../../_helpers/actions';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_REQUEST = createRequestActionType(ADD_USER);
export const ADD_USER_SUCCESS = createSuccessActionType(ADD_USER);
export const ADD_USER_FAILURE = createFailureActionType(ADD_USER);

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_REQUEST = createRequestActionType(DELETE_USER);
export const DELETE_USER_SUCCESS = createSuccessActionType(DELETE_USER);
export const DELETE_USER_FAILURE = createFailureActionType(DELETE_USER);

export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_REQUEST = createRequestActionType(EDIT_USER);
export const EDIT_USER_SUCCESS = createSuccessActionType(EDIT_USER);
export const EDIT_USER_FAILURE = createFailureActionType(EDIT_USER);

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_REQUEST = createRequestActionType(FETCH_USERS);
export const FETCH_USERS_SUCCESS = createSuccessActionType(FETCH_USERS);
export const FETCH_USERS_FAILURE = createFailureActionType(FETCH_USERS);
