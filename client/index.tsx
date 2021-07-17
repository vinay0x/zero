import React from 'react';
import ReactDOM from 'react-dom';
import { ValidatorProvider } from 'react-class-validator';
import App from './App';
import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ValidatorProvider>
      <App />
    </ValidatorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
