
import {
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
} from '../actions/types/groups';
import { updateObject } from '../_helpers/utility';
import { addGroup } from '../actions/groups';

const initState = {
  data: [],
  isLoading: true,
  error: null,
}


const setIsLoading = (state, flag) => updateObject(state, { isLoading: flag });
const setError = (state, error) => updateObject(state, { isLoading: false, error });
const setGroups = (state, data) => updateObject(state, { isLoading: false, data });
const deleteGroup = (state, groupId) => (
  updateObject(state, { isLoading: false, data: state.data.filter((item) => item.id !== groupId) })
);

export default function (state = initState, action) {
  const { type, response, error } = action;
  switch (type) {
    case ADD_GROUP_REQUEST:
    case FETCH_GROUPS_REQUEST:
    case DELETE_GROUP_REQUEST:
      return setIsLoading(state, true)
    case FETCH_GROUPS_SUCCESS:
      return setGroups(state, response.data.data)
    case ADD_GROUP_FAILURE:
    case FETCH_GROUPS_FAILURE:
    case DELETE_GROUP_FAILURE:
      return setError(state, error.response.data.details)
    case DELETE_GROUP_SUCCESS:
      return deleteGroup(state, action.groupId)

    default:
      return state
  }
}
