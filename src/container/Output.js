import React, { useContext } from 'react';
import UtilsConntext from './../context/utilsContext';
import Spinner from './../ui/Spinner';
import { formattedPing, formattedDig, formattedNmap } from '../utils/format';

const Output = () => {
  const utilsConntext = useContext(UtilsConntext);
  const { loading, type, result } = utilsConntext;

  if (loading) {
    return <Spinner />;
  } else {
    let formatted = '';

    switch (type) {
      case 'whois':
        formatted =
          result.error || result.basicWhois + (result.registrarWhois || '');
        break;
      case 'ping':
        formatted = result.error || result.output;
        break;
      case 'traceroute':
        formatted = result.error || result.output;
        break;
      case 'nmap':
        formatted = result.error || formattedNmap(result);
        break;
      case 'dig':
        formatted = result.error || formattedDig(result);
        break;
      default:
        break;
    }

    return (
      <div className={'output ' + (formatted ? 'show' : '')}>
        <pre>{formatted}</pre>
      </div>
    );
  }
};

export default Output;
