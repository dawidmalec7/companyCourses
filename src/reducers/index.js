import { combineReducers } from 'redux';
import authReducer from './auth';
import groupsReducer from './groups';
import usersReducer from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  users: usersReducer,
});

export default rootReducer;
