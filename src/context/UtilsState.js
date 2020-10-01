import React, { useReducer } from 'react';
import axios from 'axios';
import UtilsContext from './utilsContext';
import UtilsReducer from './utilsReducer';
import { catchAsync } from './../middleware';
import { DNS } from './types';

const UtilsState = (props) => {
  const initialState = {
    result: '',
    type: '',
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(UtilsReducer, initialState);

  //WHOIS
  const util = catchAsync(async (domain, action) => {
    setLoading(true);

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

  return (
    <UtilsContext.Provider
      value={{
        result: state.result,
        type: state.type,
        loading: state.loading,
        error: state.error,
        util,
      }}
    >
      {props.children}
    </UtilsContext.Provider>
  );
};

export default UtilsState;
