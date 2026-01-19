import React, { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/layout/Navbar'; 
import HomePage from './pages/Home/HomePage.jsx'; 
import SalsaPage from './pages/Salsa/SalsaPage.jsx';
import BachataPage from './pages/Bachata/BachataPage.jsx'; 
import Footer from './components/layout/Footer';
import KizombaPage from './pages/Kizomba/kizombaPage.jsx'; 
import InstructorPage from "./pages/Instructor/instructorPage.jsx"; 
import CookieConsent from './components/ui/CookieConsent/CookieConsent.jsx'; 
import WorkInProgress from './components/ui/WorkInProgress/WorkInProgress.jsx';
import './features/CircularGallery/CircularGallery.css'; 
import DXPLogo from './assets/icons/DXPlogo.png'; 

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const [showWIP, setShowWIP] = useState(false);

  useEffect(() => {
    // Functie pentru a seta favicon-ul corect (fara deformare) si marit
    const setSmartFavicon = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        // Determinam latura patratului (cea mai mare dimensiune a imaginii)
        const size = Math.max(img.width, img.height);
        
        // Cream un canvas patrat
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // --- MODIFICARE: Factor de scalare pentru a mări logo-ul ---
        // 1.0 = dimensiune originală. 1.3 = 30% mai mare.
        // Ajustează acest număr dacă vrei să fie și mai mare sau mai mic.
        const scaleFactor = 2.5; 
        
        const scaledWidth = img.width * scaleFactor;
        const scaledHeight = img.height * scaleFactor;

        // Calculam pozitia pentru a centra imaginea scalata
        // (Dacă imaginea nu are margini transparente, asta ar putea tăia puțin din ea)
        const x = (size - scaledWidth) / 2;
        const y = (size - scaledHeight) / 2;
        
        // Curatam canvas-ul pentru transparenta
        ctx.clearRect(0, 0, size, size);

        // Desenam imaginea centrata si scalata
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
        
        // Actualizam tag-ul <link rel="icon">
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            // Dacă nu există, îl adăugăm
            document.head.appendChild(link);
        }
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL();
      };
    };

    setSmartFavicon(DXPLogo);

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

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;