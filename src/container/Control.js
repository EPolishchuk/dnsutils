import React from 'react';

const Control = () => {
  return (
    <div>
      <input type='text' />
      <div>
        <button>ping</button>
        <button>traceroute</button>
        <button>whois</button>
        <button>dig</button>
        <button>nmap</button>
      </div>
    </div>
  );
};

export default Control;
