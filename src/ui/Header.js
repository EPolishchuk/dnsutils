import React from 'react';
import { Link } from 'react-router-dom';
import InfoBlock from '../container/InfoBlock';
import sm from './style.module.scss';

const Header = () => {
  return (
    <header>
      <div className={sm.container}>
        <h3>
          <Link className={sm.titleLink} to='/'>
            &gt;dig it
          </Link>
        </h3>
        <InfoBlock />
      </div>
    </header>
  );
};

export default Header;
