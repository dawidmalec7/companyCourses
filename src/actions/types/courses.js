import { createRequestActionType, createSuccessActionType, createFailureActionType } from '../../_helpers/actions';

export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSE_REQUEST = createRequestActionType(ADD_COURSE);
export const ADD_COURSE_SUCCESS = createSuccessActionType(ADD_COURSE);
export const ADD_COURSE_FAILURE = createFailureActionType(ADD_COURSE);

export const DELETE_COURSE = 'DELETE_COURSE';
export const DELETE_COURSE_REQUEST = createRequestActionType(DELETE_COURSE);
export const DELETE_COURSE_SUCCESS = createSuccessActionType(DELETE_COURSE);
export const DELETE_COURSE_FAILURE = createFailureActionType(DELETE_COURSE);

export const EDIT_COURSE = 'EDIT_COURSE';
export const EDIT_COURSE_REQUEST = createRequestActionType(EDIT_COURSE);
export const EDIT_COURSE_SUCCESS = createSuccessActionType(EDIT_COURSE);
export const EDIT_COURSE_FAILURE = createFailureActionType(EDIT_COURSE);

export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_COURSES_REQUEST = createRequestActionType(FETCH_COURSES);
export const FETCH_COURSES_SUCCESS = createSuccessActionType(FETCH_COURSES);
export const FETCH_COURSES_FAILURE = createFailureActionType(FETCH_COURSES);
