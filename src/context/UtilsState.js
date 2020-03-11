import React, { useReducer } from 'react';
import axios from 'axios';
import UtilsContext from './utilsContext';
import UtilsReducer from './utilsReducer';
import { DNS } from './types';

const UtilsState = props => {
  const initialState = {
    result: '',
    type: '',
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(UtilsReducer, initialState);

  //WHOIS
  const util = async (domain, action) => {
    setLoading(true);

    let res;

    switch (action) {
      case 'WHOIS':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}/2.php?domain=${domain}`
        );
        break;
      case 'DIG':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}/6.php?domain=${domain}`
        );
        break;
      case 'NMAP':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}/5.php?host=${domain}`
        );
        break;
      case 'PING':
        res = await axios.get(
          `${process.env.REACT_APP_NATIVE_API}/3.php?host=${domain}`
        );
        break;
      case 'TRACEROUTE':
        res = await axios.get(
          `${process.env.REACT_APP_BASE_PATH}?h=${domain}&c=1&a=-m%2015%20-n`
        );
        break;
      default:
        res = {};
        break;
    }

    setLoading(false);

    dispatch({
      type: DNS[action],
      payload: res.data.result
    });
  };

  const setLoading = loading =>
    dispatch({ type: DNS.SET_LOADING, payload: loading });

  return (
    <UtilsContext.Provider
      value={{
        result: state.result,
        type: state.type,
        loading: state.loading,
        error: state.error,
        util
      }}
    >
      {props.children}
    </UtilsContext.Provider>
  );
};

export default UtilsState;
