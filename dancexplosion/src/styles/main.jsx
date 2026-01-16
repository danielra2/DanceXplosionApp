import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx'; 
import './index.css'; 
import { initAmplitude } from '../services/analytics'; 

// MODIFICARE: Inițializăm doar dacă avem deja acordul salvat
if (localStorage.getItem('cookiesAccepted') === 'true') {
  initAmplitude();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)