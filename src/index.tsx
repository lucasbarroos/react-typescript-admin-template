import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes isAuthenticated={false} />
  </React.StrictMode>,
  document.getElementById('root'),
);
