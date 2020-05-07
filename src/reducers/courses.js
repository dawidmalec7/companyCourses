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
  } from '../actions/types/courses';
  import { updateObject } from '../_helpers/utility';
  import { addCourse } from '../actions/courses';
  
  const initState = {
    data: [],
    isLoading: true,
    error: null,
  }
  
  
  const setIsLoading = (state, flag) => updateObject(state, { isLoading: flag });
  const setError = (state, error) => updateObject(state, { isLoading: false, error });
  const setCOURSEs = (state, data) => updateObject(state, { isLoading: false, data });
  const deleteCOURSE = (state, CourseId) => (
    updateObject(state, { isLoading: false, data: state.data.filter((item) => item.id !== CourseId) })
  );
  
  export default function (state = initState, action) {
    const { type, response, error } = action;
    switch (type) {
      case ADD_COURSE_REQUEST:
      case FETCH_COURSES_REQUEST:
      case EDIT_COURSE_REQUEST:
      case DELETE_COURSE_REQUEST:
        return setIsLoading(state, true)
  
      case FETCH_COURSES_SUCCESS:
        return setCourses(state, response.data.data)
      case DELETE_COURSE_SUCCESS:
        return deleteCourse(state, action.CourseId)
      case EDIT_COURSE_SUCCESS:
        return editCourse(state, action.CourseId)
  
      case ADD_COURSE_FAILURE:
      case FETCH_COURSES_FAILURE:
      case EDIT_COURSE_FAILURE:
      case DELETE_COURSE_FAILURE:
        return setError(state, error.response.data.details)
  
      default:
        return state
    }
  }
  