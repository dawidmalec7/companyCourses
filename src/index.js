import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Navbar from './components/universal/Navbar';
import Homepage from './pages/Homepage';
import Signin from './components/auth/Signin';
//import Signup from './components/auth/Signup';
import reducers from './reducers';
import requireAuth from './components/hoc/RequireAuth';
import noRequireAuth from './components/hoc/noRequireAuth';
import { AUTHENTICATED } from './actions/auth';
import Dashboard from './pages/Dashboard';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');
if(user) {
  store.dispatch({ type: AUTHENTICATED });
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={noRequireAuth(Signin)} />
        {/* <Route path="/signup" component={noRequireAuth(Signup)} /> */}
        {/* <Route path="/signout" component={requireAuth(Signout)} /> */}
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
