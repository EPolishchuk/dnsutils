import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UtilsContext from './../context/utilsContext';
import sm from './style.module.scss';

function InfoBlock() {
  const utilsContext = useContext(UtilsContext);
  const { loadingUser, user } = utilsContext;

  useEffect(() => {
    utilsContext.getUserData();
  }, []);

  return (
    <div className={sm.info}>
      <sub className={sm.about}>your IP</sub>{' '}
      {loadingUser ? 'fetching info...' : user.ip}
      <Link to='/me' title='more info about you'>
        <i className={sm.arrow}></i>
      </Link>
    </div>
  );
}

export default InfoBlock;
