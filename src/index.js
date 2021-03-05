//Global Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

//This function is responsible for rendering the entire application itself into the browser
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
