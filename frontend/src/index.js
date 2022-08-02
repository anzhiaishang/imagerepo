import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'


ReactDOM.render(
  <BrowserRouter>
    <AppRouter>
      <App />
    </AppRouter>

  </BrowserRouter>,
  document.getElementById('root')
);

