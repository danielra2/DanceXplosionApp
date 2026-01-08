import React, { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import HomePage from './homepage/hero/HomePage.jsx'; 
import SalsaPage from './homepage/salsaPage/SalsaPage.jsx'; 
import BachataPage from './homepage/BachataPage/BachataPage.jsx';
import KizombaPage from './homepage/kizombaPage/kizombaPage.jsx'; 
import InstructorPage from "./homepage/instructorPage/instructorPage.jsx";
import RobotCheck from "./homepage/robotCheck/RobotCheck.jsx"; 
import CookieConsent from './homepage/cookieConsent/CookieConsent.jsx'; 
import FormularInscriere from './homepage/formularInscriere/FormularInscriere.jsx';
import LoginPage from './login/LoginPage.jsx'; 
import './homepage/teamphotocarousel/CircularGallery.css';

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

  // --- LOGICĂ ACTUALIZATĂ PENTRU WHATSAPP ---
  const openInscriere = () => {
    const numarTelefon = "40746089802"; // Numărul tău în format internațional
    const mesaj = encodeURIComponent("Bună ziua! Doresc să rezerv o clasă de probă la Dance Xplosion Academy.");
    const urlWhatsapp = `https://wa.me/${numarTelefon}?text=${mesaj}`;
    
    window.open(urlWhatsapp, '_blank');
  };

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
      {/* NAVBAR GLOBAL - VIZIBIL PE TOATE PAGINILE */}
      <Navbar openLogin={openLogin} />

      {/* FORMULAR ARHIVAT: 
          Am comentat componenta de mai jos pentru a păstra designul intact în cod, 
          dar a preveni afișarea lui până când baza de date este gata.
      */}
      {/* <FormularInscriere isVisible={showInscriere} onClose={closeInscriere} /> */}
      
      <LoginPage isVisible={showLogin} onClose={closeLogin} /> 

      {/* Pagina curentă - Pasăm openInscriere către toate paginile pentru a merge butoanele de WhatsApp */}
      {PageComponent === HomePage ? (
        <HomePage 
          openInscriere={openInscriere}
          openLogin={openLogin}       
        />
      ) : (
        <PageComponent openInscriere={openInscriere} />
      )}

      {/* Banner Cookie */}
      <CookieConsent />
    </div>
  );
}

export default App;