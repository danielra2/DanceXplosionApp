// danielra2/dancexplosionapp/DanceXplosionApp-a94c15dc3de500a5513341889159fdbe9997e0bd/dancexplosion/src/App.jsx

import React from 'react';
import './App.css'; 
// Importă componenta HomePage
// CORECT: Calea către src/homepage/hero/
import HomePage from './homepage/hero/HomePage.jsx'; 

// Import corect către fișierul existent în folderul teamphotocarousel
// Calea din src/App.jsx către src/homepage/teamphotocarousel/
import './homepage/teamphotocarousel/CircularGalery.css';

// CORECT: Importăm asset-urile principale AICI (în App.jsx)
import DXAPromoVideo from './assets/mainvideo/DXA Promo.mp4'; 

function App() {
  return (
    <div className="App">
      {/* Transmitem calea video ca PROP către HomePage.jsx */}
      <HomePage videoSource={DXAPromoVideo} />
    </div>
  );
}

export default App;