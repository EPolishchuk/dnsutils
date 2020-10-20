import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage/index';
import UserInfo from '../pages/UserInfo/index';

const AppRoutes = () => {
  return (
    <Switch>
      <Route component={UserInfo} path='/about-me' />
      <Route component={HomePage} path='/' />
    </Switch>
  );
};

export default AppRoutes;
