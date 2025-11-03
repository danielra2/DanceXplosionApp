import React, { useRef, useEffect } from 'react';
import './HomePage.css';
// CORECTAT: Cale relativă din src/homepage/hero/ către src/homepage/teamphotocarousel/
import InfiniteMovingTeamCarousel from '../teamphotocarousel/CircularGallery'; 
// CORECTAT: Cale relativă din src/homepage/hero/ către src/homepage/classdetails/
import ClassDetails from '../classdetails/ClassDetails'; 
// ELIMINAT: Am eliminat importul de video de aici, deoarece se face în App.jsx
// import DXAPromoVideo from '../../assets/mainvideo/DXA Promo.mp4'; // Această linie a fost eliminată.

function HomePage({ videoSource }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;

    const videoElement = videoRef.current;
    
    // Logica Video: Folosește IntersectionObserver

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Video este vizibil: reluare și UNMUTE
          videoElement.muted = false; 
          videoElement.play().catch(error => {
             console.log("Eroare la reluare/unmute video:", error);
          });
        } else {
          // Video NU este vizibil: MUTE și PAUSE
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

  // ELIMINAT: Nicio definiție de date teamMembers aici.

  return (
    <div className="homepage-container">
      {/* === NAVIGARE (HEADER) === */}
      <header className="main-nav">
        <div className="logo">DANCE XPLOSION</div>
        <nav className="nav-links">
          {/* Butoanele Header-ului */}
          <a href="#clase">CLASE</a>
          <a href="#lxf">LXF</a>
          <button className="cta-nav cta-primary-dark">LOG IN</button>
        </nav>
      </header>

      {/* === HERO SECTION CU VIDEO FUNDAL === */}
      <section className="hero-section" ref={heroSectionRef}>
        
        {/* VIDEO CU LOGICA DE AUTO-PLAY/MUTE IN JSX */}
        <video 
            className="hero-background-video"
            src={videoSource} // FOLOSIM PROP-UL PRIMIT DIN APP.JSX
            autoPlay 
            loop 
            playsInline 
            muted // ESENȚIAL
            ref={videoRef}
            preload="auto" 
        >
            Browserul tău nu suportă elementul video.
        </video>
        
        {/* OVERLAY NEGRU SEMI-TRANSPARENT PESTE VIDEO */}
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
            <button className="cta-primary-dark">REZERVĂ O CLASĂ DE PROBĂ</button>
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