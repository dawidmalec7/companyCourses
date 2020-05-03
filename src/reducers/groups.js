
import {
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
} from '../actions/types/groups';

export default function (state = {}, action) {
  const { type, response } = action;
  switch (type) {
    case FETCH_GROUPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        data: response.data.data,
        isLoading: false,
      }

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        error: response.data.message,
        isLoading: false,
      }

    default:
      return state
  }
}
