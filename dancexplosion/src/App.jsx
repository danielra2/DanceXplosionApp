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
import WorkInProgress from './components/ui/WorkInProgress/WorkInProgress.jsx';
import './features/CircularGallery/CircularGallery.css'; 

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [isRobotVerified, setIsRobotVerified] = useState(
    localStorage.getItem('isRobotVerified') === 'true'
  );
  
  const [showWIP, setShowWIP] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentHash = route.substring(1); 

  const openInscriere = () => {
    const numarTelefon = "40751327415"; 
    const mesaj = encodeURIComponent("Bună ziua! Doresc să rezerv o clasă de probă la Dance Xplosion Academy.");
    const urlWhatsapp = `https://wa.me/${numarTelefon}?text=${mesaj}`;
    window.open(urlWhatsapp, '_blank');
  };

  const openWIP = () => setShowWIP(true);
  const closeWIP = () => setShowWIP(false);
  
  if (!isRobotVerified) {
    return <RobotCheck onVerified={setIsRobotVerified} />;
  }

  let PageComponent;
  let isHome = false;

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
    isHome = true;
  }

  return (
    <div className="App">
      <Navbar openLogin={openWIP} isHome={isHome} />

      <WorkInProgress isVisible={showWIP} onClose={closeWIP} onContact={openInscriere} />

      {isHome ? (
        <HomePage 
          openInscriere={openInscriere}
          openWIP={openWIP}       
        />
      ) : (
        <PageComponent openInscriere={openInscriere} />
      )}

      <CookieConsent />
    </div>
  );
}

export default App;