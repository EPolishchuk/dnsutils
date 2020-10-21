import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage/index';
import UserInfo from '../pages/UserInfo/index';

const AppRoutes = () => {
  return (
    <Switch>
      <Route component={UserInfo} path='/me' />
      <Route component={HomePage} exact path='/' />
      <Route component={HomePage} path='/:type/:host' />
    </Switch>
  );
};

export default AppRoutes;
