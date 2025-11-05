// danielra2/dancexplosionapp/DanceXplosionApp-1b3954f40541e7eb886e0df514c43b3d222778e02/dancexplosion/src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css'; 
import HomePage from './homepage/hero/HomePage.jsx'; 
import SalsaPage from './homepage/salsaPage/SalsaPage.jsx'; 
import './homepage/teamphotocarousel/CircularGalery.css';
import DXAPromoVideo from './assets/mainvideo/DXA Promo.mp4'; 
function App() {
  // Starea pentru a reține hash-ul curent din URL
  const [route, setRoute] = useState(window.location.hash);

  // Ascultă evenimentul de schimbare a hash-ului
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determină hash-ul fără '#'
  const currentHash = route.substring(1); 
  
  // Logică de rutare simplă: dacă hash-ul este 'salsa', afișează SalsaPage
  if (currentHash === 'salsa') {
    return (
        <div className="App">
            <SalsaPage />
        </div>
    );
  }

  // Pentru orice altceva (inclusiv hash-ul gol), afișează HomePage
  return (
    <div className="App">
      <HomePage videoSource={DXAPromoVideo} />
    </div>
  );
}

export default App;