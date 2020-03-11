import React from 'react';
import './App.css';
import Utils from './container/Utils';
import AppWrapper from './container/AppWrapper';
import Header from './ui/Header';
import Footer from './ui/Footer';

function App() {
  return (
    <AppWrapper>
      <div className='content'>
        <Header />
        <Utils />
      </div>
      <Footer />
    </AppWrapper>
  );
}

export default App;
