import React from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import AboutUser from '../../container/AboutUser';
import sm from './style.module.scss';

const UserInfo = () => {
  return (
    <>
      <div className={sm.content}>
        <Header />
        <div className={sm.container}>
          <div className={sm.row}>
          <AboutUser />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
