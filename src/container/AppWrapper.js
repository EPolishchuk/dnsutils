import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import UtilsState from '../context/UtilsState';

const AppWrapper = ({ children }) => {
  return (
    <UtilsState>
      <Router>{children}</Router>
    </UtilsState>
  );
};

export default AppWrapper;
