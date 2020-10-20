import React from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Control from '../../container/Control';
import Output from '../../container/Output';
import sm from './style.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={sm.content}>
        <Header />
        <div className={sm.container}>
          <div className={sm.row}>
            <div className={sm.col4}>
              <Control />
            </div>
            <div className={sm.col8}>
              <Output />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
