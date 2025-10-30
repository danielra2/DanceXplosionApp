// danielra2/dancexplosion/DanceXplosion-821aa754f0dd3755c517a94459d63e07d69c0fa4/dancexplosion/src/homepage/HomePage.jsx

import React, { useRef, useEffect } from 'react';
import './HomePage.css';
// Componenta rămâne importată aici, deoarece este folosită în JSX
// Import core carousel component from teamphotocarousel folder
import CircularGallery from './teamphotocarousel/CircularGallery';
// Eliminat: import '../CircularGallery.css'; 
import DXAPromoVideo from '../assets/mainvideo/DXA Promo.mp4'; 

function HomePage() {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;

    const videoElement = videoRef.current;
    
    const attemptUnmutedAutoplay = async () => {
        try {
            await videoElement.play();
            videoElement.muted = false; 
        } catch (error) {
            console.warn("Browser blocked unmuted autoplay. Video will play silently until user interaction.");
            videoElement.muted = true;
        }
    };
    
    attemptUnmutedAutoplay();


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoElement.pause();
        } else {
          videoElement.play().catch(error => {
             // Reluare video
          });
        }
      },
      { threshold: 0 } 
    );

    observer.observe(heroSectionRef.current);

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []); 

  // Definim itemii pentru CircularGallery
  const galleryItems = [
      { image: 'https://picsum.photos/seed/salsa/800/600', text: 'Salsa & Bachata' },
      { image: 'https://picsum.photos/seed/urban/800/600', text: 'Urban Style' },
      { image: 'https://picsum.photos/seed/kizomba/800/600', text: 'Kizomba Flow' },
      { image: 'https://picsum.photos/seed/contemp/800/600', text: 'Contemporary' },
      { image: 'https://picsum.photos/seed/ballet/800/600', text: 'Ballet' },
      { image: 'https://picsum.photos/seed/lxf/800/600', text: 'LXF Festival' },
  ];


  return (
    <div className="homepage-container">
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
            playsInline 
            controls 
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

      {/* === CARUSEL CIRCULAR GALLERY (Implementare OGL) === */}
      <section className="circular-gallery-wrapper">
          <h2 className="section-heading-dark">Momente Din Scoală</h2>
          {/* Container cu înălțime fixă pentru OGL */}
          <div style={{ height: '700px', position: 'relative', padding: '20px 0' }}> 
              <CircularGallery 
                  items={galleryItems}
                  bend={3} 
                  textColor="#D4AF37" // Auriu pentru textul din galerie
                  borderRadius={0.05} 
                  scrollEase={0.05}
                  scrollSpeed={3}
              />
          </div>
      </section>

      {/* === CLASSES SHOWCASE (RĂMÂNE ca secțiune de detalii) === */}
      <section className="classes-showcase-section">
        <h2 className="section-heading-dark">Detalii Despre Clase</h2>
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
          <button className="cta-lxf-gold">AFLĂ MAI MULTE</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;