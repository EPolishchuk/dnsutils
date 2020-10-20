import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import UtilsState from '../context/UtilsState';

export const history = createBrowserHistory();

const AppWrapper = ({ children }) => {
  return (
    <UtilsState>
      <Router history={history}>{children}</Router>
    </UtilsState>
  );
};

export default AppWrapper;
