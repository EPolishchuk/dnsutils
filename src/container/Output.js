import React, { useContext } from 'react';
import UtilsConntext from './../context/utilsContext';
import Spinner from './../ui/Spinner';

const Output = () => {
  const utilsConntext = useContext(UtilsConntext);
  const { loading, type, result } = utilsConntext;

  if (loading) {
    return <Spinner />;
  } else {
    let formatted = '';

    switch (type) {
      case 'whois':
        formatted = result;
        break;
      case 'ping':
        formatted = formattedPing(result);
        break;
      case 'nmap':
        formatted = formattedNmap(result);
        break;
      case 'dig':
        formatted = formattedDig(result);
        break;
      default:
        break;
    }

    return (
      <div className='output'>
        <pre>{formatted}</pre>
      </div>
    );
  }
};

export default Output;

const formattedPing = result => {
  return result
    .map(
      (el, i) => `40 bytes packages: icmp_seq=${i + 1} ttl=255 time=${el} ms`
    )
    .join('\n');
};

const formattedNmap = result => {
  return `Port ${result.port} is ${result.status ? 'open' : 'closed'}`;
};

const formattedDig = result => {
  return result
    .map(el =>
      Object.entries(el)
        .map(el => (el[0] !== 'entries' ? el[1] : ''))
        .join(' ')
    )
    .join('\n');
};
