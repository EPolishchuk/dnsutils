import React from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';

const UserInfo = () => {
  return (
    <div>
      <Header />

      <div className='container util'>
        <div className='row'>
          <h2>User info</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserInfo;
