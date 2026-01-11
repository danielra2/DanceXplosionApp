import React, { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/layout/Navbar'; 
import HomePage from './pages/Home/HomePage.jsx'; 
import SalsaPage from './pages/Salsa/SalsaPage.jsx';
import BachataPage from './pages/Bachata/BachataPage.jsx'; 
import KizombaPage from './pages/Kizomba/kizombaPage.jsx'; 
import InstructorPage from "./pages/Instructor/instructorPage.jsx"; 
import RobotCheck from "./features/auth/components/RobotCheck.jsx"; 
import CookieConsent from './components/ui/CookieConsent/CookieConsent.jsx'; 
import FormularInscriere from './features/registration/FormularInscriere/FormularInscriere.jsx'; 
import LoginPage from './features/auth/components/LoginPage.jsx'; 
import './features/team/CircularGallery/CircularGallery.css'; 

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

  const openInscriere = () => {
    const numarTelefon = "40746089802"; 
    const mesaj = encodeURIComponent("Bună ziua! Doresc să rezerv o clasă de probă la Dance Xplosion Academy.");
    const urlWhatsapp = `https://wa.me/${numarTelefon}?text=${mesaj}`;
    
    window.open(urlWhatsapp, '_blank');
  };

  const closeInscriere = () => setShowInscriere(false);
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  
  if (!isRobotVerified) {
    return <RobotCheck onVerified={setIsRobotVerified} />;
  }

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
      {}
      <Navbar openLogin={openLogin} />

      {}
      {}
      
      <LoginPage isVisible={showLogin} onClose={closeLogin} /> 

      {}
      {PageComponent === HomePage ? (
        <HomePage 
          openInscriere={openInscriere}
          openLogin={openLogin}       
        />
      ) : (
        <PageComponent openInscriere={openInscriere} />
      )}

      {}
      <CookieConsent />
    </div>
  );
}

export default App;