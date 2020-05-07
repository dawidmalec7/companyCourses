import axios from 'axios';

import {
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  EDIT_GROUP_REQUEST,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_FAILURE,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
} from './types/groups';

export const fetchGroups = () => ({
  types: [FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE],
  shouldCallAPI: (state) => state.groups.data.length === 0,
  callAPI: () => axios.get('/api/v1/groups'),
  payload: {},
})

export const addGroup = (groupData) => ({
  types: [ADD_GROUP_REQUEST, ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE],
  callAPI: () => axios.post('/api/v1/groups', groupData),
  payload: {},
})

export const editGroup = (groupId,groupData) => ({
  types: [EDIT_GROUP_REQUEST, EDIT_GROUP_SUCCESS, EDIT_GROUP_FAILURE],
  callAPI: () => axios.put(`/api/v1/groups/${groupId}`, groupData),
  payload: {},
})

export const deleteGroup = (groupId) => ({
  types: [DELETE_GROUP_REQUEST, DELETE_GROUP_SUCCESS, DELETE_GROUP_FAILURE],
  callAPI: () => axios.delete(`/api/v1/groups/${groupId}`),
  payload: { groupId },
})
