import { combineReducers } from 'redux';
import authReducer from './auth';
import groupsReducer from './groups';
import usersReducer from './users';
import coursesReducer from './courses';

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  users: usersReducer,
  courses: coursesReducer,
});

export default rootReducer;
