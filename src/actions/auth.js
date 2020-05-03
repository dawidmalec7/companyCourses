import axios from 'axios';
import history from '../config/js/history';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
} from './types/auth';

export function signInAction({ email, password }) {
  return async (dispatch) => {
    function onSuccess(response) {
      const data = response.data.data.attributes;
      const token = data.access_token;
      const role = data.logged_user.data.attributes.scope;
      dispatch({
        type: AUTHENTICATED,
        role,
      });
      localStorage.setItem('user', token);
      localStorage.setItem('role', role);
      history.push('/');
    }

    function onError(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        error: error.message,
      });
    }


    try {
      const res = await axios.post('/oauth/token', { username: email, password, grant_type: 'password' });
      return onSuccess(res);
    } catch (error) {
      return onError(error);
    }
  };
}

export function signOutAction() {
  localStorage.clear();
  history.push('/signin');
  return {
    type: UNAUTHENTICATED,
  };
}
