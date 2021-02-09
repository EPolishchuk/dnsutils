import React, { useReducer } from 'react';
import axios from 'axios';
import UtilsContext from './utilsContext';
import UtilsReducer from './utilsReducer';
import { formattedCloudFlare } from '../utils/format';
import { catchAsync } from './../middleware';
import { DNS, USER } from './types';

const UtilsState = (props) => {
  const initialState = {
    host: '',
    result: '',
    type: '',
    user: '',
    loading: false,
    loadingUser: false,
    error: null,
  };

  const [state, dispatch] = useReducer(UtilsReducer, initialState);

  //WHOIS
  const util = catchAsync(async (domain, action) => {
    setLoading(true);
    setHost(domain);

    let res;

    switch (action) {
      case 'WHOIS':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}whois.php?host=${domain}`
        );
        break;
      case 'DIG':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}dig.php?host=${domain}`
        );
        break;
      case 'NMAP':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}nmap.php?host=${domain}`
        );
        break;
      case 'PING':
        res = await axios.get(
          `${process.env.REACT_APP_OLD_API}?h=${domain}&c=0&a=-c%205%20-s%2032`
        );
        break;
      case 'TRACEROUTE':
        res = await axios.get(
          `${process.env.REACT_APP_OLD_API}?h=${domain}&c=1&a=-m%2015%20-n`
        );
        break;
      default:
        res = {};
        break;
    }

    setLoading(false);

    dispatch({
      type: DNS[action],
      payload: res.data.result,
    });
  });

  const setLoading = (loading) =>
    dispatch({ type: DNS.SET_LOADING, payload: loading });

  const setHost = (host) => dispatch({ type: DNS.SET_HOST, payload: host });

  const setUserLoading = (loading) =>
    dispatch({ type: DNS.SET_USER_LOADING, payload: loading });

  const getUserData = catchAsync(async () => {
    setUserLoading(true);

    let res = await axios.get(process.env.REACT_APP_USER_INFO);
    res.data = formattedCloudFlare(res.data);

    setUserLoading(false);

    dispatch({
      type: USER.USER,
      payload: res.data.result,
    });
  });

  return (
    <UtilsContext.Provider
      value={{
        host: state.host,
        result: state.result,
        user: state.user,
        type: state.type,
        loading: state.loading,
        loadingUser: state.loadingUser,
        error: state.error,
        getUserData,
        util,
      }}
    >
      {props.children}
    </UtilsContext.Provider>
  );
};

export default UtilsState;
