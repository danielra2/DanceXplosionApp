// src/App.jsx

import React from 'react';
import './App.css'; 
// Importă componenta HomePage din directorul 'homepage'
import HomePage from './homepage/HomePage.jsx'; 

function App() {
  return (
    // În mod normal, aici ar veni ruterul (de ex. <BrowserRouter>)
    // Dar pentru un singur Home Page, o afișăm direct.
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;