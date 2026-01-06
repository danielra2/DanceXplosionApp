import React, { useState, useEffect } from 'react';
import './App.css'; 
import HomePage from './homepage/hero/HomePage.jsx'; 
import SalsaPage from './homepage/salsaPage/SalsaPage.jsx'; 
import BachataPage from './homepage/BachataPage/BachataPage.jsx';
import KizombaPage from './homepage/kizombaPage/kizombaPage.jsx'; 
import InstructorPage from "./homepage/instructorPage/instructorPage.jsx";
import RobotCheck from "./homepage/robotCheck/RobotCheck.jsx"; 
import CookieConsent from './homepage/cookieConsent/CookieConsent.jsx'; 
import FormularInscriere from './homepage/formularInscriere/FormularInscriere.jsx';
import LoginPage from './login/LoginPage.jsx'; 
import './homepage/teamphotocarousel/CircularGalery.css';
import DXAPromoVideo from './assets/mainvideo/DXA Promo.mp4'; 

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [isRobotVerified, setIsRobotVerified] = useState(
    localStorage.getItem('isRobotVerified') === 'true'
  );
  
  const [showInscriere, setShowInscriere] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentHash = route.substring(1); 

  // Funcții pentru a fi pasate ca props
  const openInscriere = () => setShowInscriere(true);
  const closeInscriere = () => setShowInscriere(false);
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  
  // 1. Verificare Anti-Robot
  if (!isRobotVerified) {
    return <RobotCheck onVerified={setIsRobotVerified} />;
  }

  // 2. Rutare
  let PageComponent;
  if (currentHash === 'salsa') {
    PageComponent = SalsaPage;
  } else if (currentHash === 'bachata') {
    PageComponent = BachataPage;
  } else if (currentHash === 'kizomba') {
    PageComponent = KizombaPage;
  } else if (currentHash.startsWith('instructor/')) {
    PageComponent = InstructorPage;
  } else {
    PageComponent = HomePage;
  }

  return (
    <div className="App">
      {/* Componentele Modale */}
      <FormularInscriere isVisible={showInscriere} onClose={closeInscriere} />
      <LoginPage isVisible={showLogin} onClose={closeLogin} /> 

      {/* Pagina curentă. Transmitem funcțiile de deschidere ca props. */}
      {PageComponent === HomePage ? (
        <HomePage 
          videoSource={DXAPromoVideo} 
          openInscriere={openInscriere}
          openLogin={openLogin}       
        />
      ) : (
        <PageComponent />
      )}

      {/* Banner Cookie */}
      <CookieConsent />
    </div>
  );
}

export default App;