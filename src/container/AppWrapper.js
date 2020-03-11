import React from 'react';
import UtilsState from '../context/UtilsState';

const AppWrapper = ({ children }) => {
  return <UtilsState>{children}</UtilsState>;
};

export default AppWrapper;
