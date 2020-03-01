import React from 'react';
import { BRAND } from './../constants/constants';

const Footer = () => {
  return (
    <footer>
      {new Date().getFullYear()} &copy; {BRAND}
    </footer>
  );
};

export default Footer;
