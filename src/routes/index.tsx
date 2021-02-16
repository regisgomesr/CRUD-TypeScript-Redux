import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import UserList from '../components/UserList';
// import CreateUser from "../pages/CreateUser";

import store from '../store';

const Routes = () => (
  <Provider store={store}>
    <Route path="/" exact component={UserList} />
  </Provider>
);

export default Routes;
