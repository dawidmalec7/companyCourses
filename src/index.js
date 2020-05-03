/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import axiosConfig from './config/js/axios';
import history from './config/js/history';
import callAPIMiddleware from './_helpers/callAPIMiddleware';

import reducers from './reducers';
import { AUTHENTICATED } from './actions/types/auth';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, applyMiddleware(callAPIMiddleware));

axiosConfig();
const user = localStorage.getItem('user');
if (user) {
  store.dispatch({ type: AUTHENTICATED, payload: 'admin' });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
