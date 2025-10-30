// danielra2/dancexplosion/DanceXplosion-821aa754f0dd3755c517a94459d63e07d69c0fa4/dancexplosion/src/homepage/HomePage.jsx

import React, { useRef, useEffect } from 'react';
import './HomePage.css';

// Asigură-te că acest fișier video există la calea specificată
import DXAPromoVideo from '../assets/mainvideo/DXA Promo.mp4'; 

function HomePage() {
  // Referințe pentru a accesa elementele DOM
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);

  // Logica de gestionare a vizibilității (muting on scroll)
  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;

    const videoElement = videoRef.current;
    
    // Setăm muted la început pentru a ne asigura că autoplay-ul funcționează
    // (Acest lucru este anulat la primul click al utilizatorului prin handleFirstInteraction)
    videoElement.muted = true; 

    // Inițializăm IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dacă secțiunea NU este vizibilă
        if (!entry.isIntersecting) {
          // Oprim video-ul și sunetul când iese din ecran
          videoElement.pause();
        } else {
          // Dacă secțiunea redevine vizibilă (scroll înapoi)
          // Repornim video-ul (muted pentru a respecta politicile browserului)
          videoElement.play().catch(error => {
             // Această eroare este normală dacă browserul blochează repornirea automată
             // după ce utilizatorul a interacționat cu pagina.
          });
        }
      },
      // Pragul 0 înseamnă că observatorul se declanșează de îndată ce
      // 1 pixel din element iese sau intră în viewport.
      { threshold: 0 } 
    );

    // Începem să observăm containerul Hero
    observer.observe(heroSectionRef.current);

    // Funcție de curățare (cleanup)
    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []); // Se rulează o singură dată

  // Funcția pentru a dezactiva MUTED la prima interacțiune a utilizatorului
  // (Este aplicată pe div-ul principal al paginii)
  const handleFirstInteraction = () => {
    if (videoRef.current && videoRef.current.muted) {
        // Dezactivăm muted, permițând sunetul
        videoRef.current.muted = false;
        // Eliminăm ascultătorul de eveniment după prima utilizare
        document.querySelector('.homepage-container').removeEventListener('click', handleFirstInteraction);
    }
  };


  return (
    // Atașăm ascultătorul de click pentru a permite sunetul la prima interacțiune
    <div className="homepage-container" onClick={handleFirstInteraction}>
      {/* === NAVIGARE === */}
      <header className="main-nav">
        <div className="logo">DANCE XPLOSION</div>
        <nav className="nav-links">
          <a href="#clase">CLASE</a>
          <a href="#lxf">LXF</a>
          <button className="cta-nav cta-primary-dark">LOG IN</button>
        </nav>
      </header>

      {/* === HERO SECTION CU VIDEO FUNDAL === */}
      <section className="hero-section" ref={heroSectionRef}>
        
        {/* VIDEO CA FUNDAL */}
        <video 
            className="hero-background-video"
            src={DXAPromoVideo}
            autoPlay 
            loop 
            playsInline // Necesar pentru autoplay pe mobile
            controls // Permite utilizatorului să oprească/pornească sunetul
            ref={videoRef}
        >
            Browserul tău nu suportă elementul video.
        </video>
        
        {/* OVERLAY NEGRU SEMI-TRANSPARENT PESTE VIDEO */}
        <div className="video-overlay"></div>

        {/* CONȚINUT HERO (Centrat și Simetric) */}
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

      {/* === CLASSES SHOWCASE === */}
      <section className="classes-showcase-section">
        <h2 className="section-heading-dark">Descoperă Clasele Noastre</h2>
        <div className="classes-card-container">
          {/* Card 1 */}
          <div className="class-showcase-card">
            <div className="card-image-placeholder"></div>
            <div className="card-info">
              <h3>Hip-Hop</h3>
              <p>Energie pură și freestyle pentru toți cei care iubesc ritmurile urbane.</p>
              <span className="class-tag">POPULAR</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="class-showcase-card">
            <div className="card-image-placeholder"></div>
            <div className="card-info">
              <h3>Contemporary</h3>
              <p>Exprimă-te prin mișcări fluide și emoționale.</p>
              <span className="class-tag">NOU</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="class-showcase-card">
            <div className="card-image-placeholder"></div>
            <div className="card-info">
              <h3>Ballet</h3>
              <p>Eleganță și tehnică clasică pentru toate nivelurile.</p>
              <span className="class-tag">CLASIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LXF PROMO === */}
      <section className="lxf-promo-section">
        <div className="lxf-content-dark">
          <h2 className="lxf-title">LXF 2025</h2>
          <p className="lxf-description">
            Cel mai mare festival de dans din Transilvania. Pregătește-te pentru spectacol!
          </p>
          <button className="cta-lxf-gold">AFLĂ MAI MULTE.</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;