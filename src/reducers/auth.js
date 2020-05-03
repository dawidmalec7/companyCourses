import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
} from '../actions/types/auth';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        error: '',
        role: action.role,
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        role: '',
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state, error: action.error,
      };
    default:
      return state;
  }
}
