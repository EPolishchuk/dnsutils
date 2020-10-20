import React from 'react';
import sm from './style.module.scss';

const Footer = () => {
  return (
    <footer className={sm.footer}>
      {new Date().getFullYear()} &copy; Eldar
    </footer>
  );
};

export default Footer;
