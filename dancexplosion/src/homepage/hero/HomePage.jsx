import React, { useRef, useEffect, useState } from 'react'; // ADĂUGAT: useState
import './HomePage.css';
import InfiniteMovingTeamCarousel from '../teamphotocarousel/CircularGallery'; 
import ClassDetails from '../classdetails/ClassDetails'; 
import FormularInscriere from '../FormularInscriere/FormularInscriere'; 

import DanceXplosionLogo from '../../assets/photos/dancelogo.jpg'; 

function HomePage({ videoSource }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // NOU: Starea pentru scroll detection

  // Logica 1: Control Video/Sunet (Intersection Observer)
  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;
    // ... (Logica existentă a Intersection Observer-ului pentru video/mute/pause)
    const videoElement = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.muted = false; 
          videoElement.play().catch(error => {
             console.log("Eroare la reluare/unmute video:", error);
          });
        } else {
          videoElement.muted = true;
          videoElement.pause();
        }
      },
      { threshold: 0.5 } 
    );

    observer.observe(heroSectionRef.current);

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []); 

  // Logica 2: Control Header (Scroll Event)
  useEffect(() => {
    const handleScroll = () => {
      // Verificăm dacă utilizatorul a derulat mai mult de 100px (sau înălțimea video-ului)
      // Folosim o valoare fixă de 100px pentru a fi simplu, dar ideal ar fi să folosiți înălțimea header-ului/video-ului.
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Clasa dinamică adăugată la header
  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <div className="homepage-container">
      
      <FormularInscriere isVisible={showModal} onClose={handleCloseModal} />
      
      {/* === NAVIGARE (HEADER) === */}
      <header className={headerClass}> {/* CLASA DINAMICĂ AICI */}
        <div className="logo">
            <img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <div className="dropdown-container">
            <a href="#clase" className="nav-link-main">CLASE</a>
      <div className="dropdown-menu simplified">
        {/* Use hash navigation handled by App.jsx */}
        <a href="#salsa" className="class-type-main">Salsa</a>
        <a href="#bachata" className="class-type-main">Bachata</a>
        <a href="#kizomba" className="class-type-main">Kizomba</a>
        <a href="#mixed" className="class-type-main mixt-link">Clasă Mixtă (Beginner)</a>
      </div>
          </div>
          
          <a href="#lxf">LXF</a>
          <button className="cta-nav cta-primary-dark">LOG IN</button>
        </nav>
      </header>

      {/* === HERO SECTION CU VIDEO FUNDAL === */}
      <section className="hero-section" ref={heroSectionRef}>
        
        <video 
            className="hero-background-video"
            src={videoSource}
            autoPlay 
            loop 
            playsInline 
            muted 
            ref={videoRef}
            preload="auto" 
        >
            Browserul tău nu suportă elementul video.
        </video>
        
        <div className="video-overlay"></div>

        {/* CONȚINUT HERO (BUTOANE PRINCIPALE) */}
        <div className="hero-content-wrapper">
          <h1 className="hero-title">
            <span className="title-word delay-1">ÎNCEPE</span>{' '}
            <span className="title-word accent-color-text delay-2">MIȘCAREA</span>{' '}
            <span className="title-word accent-color-text delay-3">TA.</span>
          </h1>
          <p className="hero-pitch">
            Academia ta de dans din Sibiu. De la primele mișcări la festivaluri naționale.
          </p>
          <div className="hero-cta-group">
            {/* MODIFICARE: Apelăm funcția de deschidere a modalului */}
            <button className="cta-primary-dark" onClick={handleOpenModal}>REZERVĂ O CLASĂ DE PROBĂ</button>
            <button className="cta-secondary-accent">VEZI ORARUL</button>
          </div>
        </div>
      </section>

      {/* === CARUSELUL CU ECHIPA === */}
      <section className="circular-gallery-wrapper">
          <h2 className="section-heading-dark">Cunoaște Echipa Noastră</h2>
          <div className="circular-gallery-container" style={{ margin: '40px auto 0' }}> 
              <InfiniteMovingTeamCarousel />
          </div>
      </section>

      {/* === CLASSES SHOWCASE === */}
      <ClassDetails /> 

      {/* === LXF PROMO === */}
      <section className="lxf-promo-section">
        <div className="lxf-content-dark">
          <h2 className="lxf-title">LXF 2025</h2>
          <p className="lxf-description">
            Cel mai mare festival de dans din Transilvania. Pregătește-te pentru spectacol!
          </p>
          <button className="cta-lxf-gold">AFLĂ MAI MULTE</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;