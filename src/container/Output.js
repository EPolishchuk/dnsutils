import React, { useContext } from 'react';
import UtilsConntext from './../context/utilsContext';
import Spinner from './../ui/Spinner';
import { formattedPing, formattedDig, formattedNmap } from '../utils/format';

const Output = () => {
  const utilsConntext = useContext(UtilsConntext);
  const { loading, type, host, result } = utilsConntext;

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
      <div className={'output-wrapper ' + (formatted ? 'show' : '')}>
        <div className={'util-type-wrapper'}>
          <span className='util-type'>
            {type.toUpperCase()} output for {host.toLowerCase()}
          </span>
        </div>
        <div className='output'>
          <pre>{formatted}</pre>
        </div>
      </div>
    );
  }
};

export default Output;
