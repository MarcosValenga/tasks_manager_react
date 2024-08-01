import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Raiz do DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render da raiz
root.render(
  // StrictMode, não é um UI visivel, verifica e problemas nos descendentes.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

