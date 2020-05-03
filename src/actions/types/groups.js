import { createRequestActionType, createSuccessActionType, createFailureActionType } from '../../_helpers/actions';

export const ADD_GROUP = 'ADD_GROUP';
export const ADD_GROUP_REQUEST = createRequestActionType(ADD_GROUP);
export const ADD_GROUP_SUCCESS = createSuccessActionType(ADD_GROUP);
export const ADD_GROUP_FAILURE = createFailureActionType(ADD_GROUP);

export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_GROUP_REQUEST = createRequestActionType(DELETE_GROUP);
export const DELETE_GROUP_SUCCESS = createSuccessActionType(DELETE_GROUP);
export const DELETE_GROUP_FAILURE = createFailureActionType(DELETE_GROUP);

export const EDIT_GROUP = 'EDIT_GROUP';
export const EDIT_GROUP_REQUEST = createRequestActionType(EDIT_GROUP);
export const EDIT_GROUP_SUCCESS = createSuccessActionType(EDIT_GROUP);
export const EDIT_GROUP_FAILURE = createFailureActionType(EDIT_GROUP);

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_REQUEST = createRequestActionType(FETCH_GROUPS);
export const FETCH_GROUPS_SUCCESS = createSuccessActionType(FETCH_GROUPS);
export const FETCH_GROUPS_FAILURE = createFailureActionType(FETCH_GROUPS);
