import React from 'react';
import { BRAND } from './../constants/constants';

const Footer = () => {
  return (
    <footer className='footer'>
      {new Date().getFullYear()} &copy; {BRAND}
    </footer>
  );
};

export default Footer;
