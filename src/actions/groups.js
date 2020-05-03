import axios from 'axios';

import {
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from './types/groups';


export const addGroup = (groupData) => ({
  types: [ADD_GROUP_REQUEST, ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE],
  shouldCallAPI: (state) => !state.groups,
  callApi: () => axios.create('/api/v1/groups', groupData),
  payload: {},
})

export const fetchGroups = () => ({
  types: [FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE],
  shouldCallAPI: (state) => typeof state.groups.data === 'undefined',
  callAPI: () => axios.get('/api/v1/groups'),
  payload: {},
})

// export function signInAction({ email, password }) {
//   return async (dispatch) => {
//     function onSuccess(response) {
//       const data = response.data.data.attributes;
//       const token = data.access_token;
//       const role = data.logged_user.data.attributes.scope;
//       dispatch({
//         type: AUTHENTICATED,
//         role,
//       });
//       localStorage.setItem('user', token);
//       localStorage.setItem('role', role);
//       history.push('/');
//     }

//     function onError(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         error: error.message,
//       });
//     }


//     try {
//       const res = await axios.post('/oauth/token',
// { username: email, password, grant_type: 'password' });
//       return onSuccess(res);
//     } catch (error) {
//       return onError(error);
//     }
//   };
// }

// export function signOutAction() {
//   localStorage.clear();
//   history.push('/signin');
//   return {
//     type: UNAUTHENTICATED,
//   };
// }
