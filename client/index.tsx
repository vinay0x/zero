import React from 'react';
import { ValidatorProvider } from 'react-class-validator';
import ReactDOM from 'react-dom';
import App from './App';
// https://github.com/tailwindlabs/tailwindcss/issues/443#issuecomment-661559687
import './assets/styles/tailwind/before.scss';
import './assets/styles/application.scss';
import './assets/styles/tailwind/after.scss';

ReactDOM.render(
  <React.StrictMode>
    <ValidatorProvider>
      <App />
    </ValidatorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
