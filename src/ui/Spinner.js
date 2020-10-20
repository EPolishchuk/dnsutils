import React from 'react';
import sm from './style.module.scss';

const Spinner = () => {
  return (
    <div className={sm.wrapper}>
      <div className={sm.spinner}></div>
    </div>
  );
};

export default Spinner;
