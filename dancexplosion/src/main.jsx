// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// Importăm componenta App care, la rândul ei, va importa HomePage
import App from './App.jsx'; 
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)