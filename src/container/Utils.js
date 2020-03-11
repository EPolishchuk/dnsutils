import React from 'react';
import './Utils.css';
import Control from './Control';
import Output from './Output';

const Utils = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-mobile'>
          <Control />
        </div>
        <div className='col-mobile'>
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Utils;
