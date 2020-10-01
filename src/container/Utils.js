import React from 'react';
import './Utils.css';
import Control from './Control';
import Output from './Output';

const Utils = () => {
  return (
    <div className='container util'>
      <div className='row'>
        <div className='col-mobile col-4'>
          <Control />
        </div>
        <div className='col-mobile col-8'>
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Utils;
