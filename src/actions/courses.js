import axios from 'axios';

import {
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  EDIT_COURSE_REQUEST,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
} from './types/courses';

export const fetchCourses = () => ({
  types: [FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE],
  shouldCallAPI: (state) => state.courses.data.length === 0,
  callAPI: () => axios.get('/api/v1/courses'),
  payload: {},
})

export const addCourse = (CourseData) => ({
  types: [ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, ADD_COURSE_FAILURE],
  callAPI: () => axios.post('/api/v1/courses', CourseData),
  payload: {},
})

export const editCourse= (CourseId,CourseData) => ({
  types: [EDIT_COURSE_REQUEST, EDIT_COURSE_SUCCESS, EDIT_COURSE_FAILURE],
  callAPI: () => axios.put(`/api/v1/courses/${CourseId}`, CourseData),
  payload: {},
})

export const deleteCourse = (CourseId) => ({
  types: [DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAILURE],
  callAPI: () => axios.delete(`/api/v1/courses/${CourseId}`),
  payload: { CourseId },
})