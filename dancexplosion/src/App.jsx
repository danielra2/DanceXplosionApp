// danielra2/dancexplosion/DanceXplosion-821aa754f0dd3755c517a94459d63e07d69c0fa4/dancexplosion/src/App.jsx

import React from 'react';
import './App.css'; 
// Importă componenta HomePage
import HomePage from './homepage/hero/HomePage.jsx'; 

// ADĂUGAT: Importăm stilurile specifice caruselului aici (global/principal)
// Import corect către fișierul existent în folderul teamphotocarousel
import './homepage/teamphotocarousel/CircularGalery.css';


function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;