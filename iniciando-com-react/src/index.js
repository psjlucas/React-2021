import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App nome="Fulano de Tal" idade="27" />
  </React.StrictMode>,
  document.getElementById('root')
);
