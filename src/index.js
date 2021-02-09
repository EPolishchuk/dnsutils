import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './app/index';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
