import { DNS } from './types';

export default (state, action) => {
  switch (action.type) {
    case DNS.WHOIS:
      return {
        ...state,
        type: DNS.WHOIS,
        result: action.payload
      };
    case DNS.DIG:
      return {
        ...state,
        type: DNS.DIG,
        result: action.payload
      };
    case DNS.PING:
      return {
        ...state,
        type: DNS.PING,
        result: action.payload
      };
    case DNS.TRACEROUTE:
      return {
        ...state,
        type: DNS.TRACEROUTE,
        result: action.payload
      };
    case DNS.NMAP:
      return {
        ...state,
        type: DNS.NMAP,
        result: action.payload
      };
    case DNS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case DNS.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
