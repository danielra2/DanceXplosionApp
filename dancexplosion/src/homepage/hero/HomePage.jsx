import React, { useRef, useEffect } from 'react';
import './HomePage.css';
// Noul carusel InfiniteMovingTeamCarousel, exportat din CircularGallery.jsx
import InfiniteMovingTeamCarousel from '../teamphotocarousel/CircularGallery';
// Eliminat: import '../CircularGallery.css'; 
// Correct asset imports (hero is one level deeper: src/homepage/hero)
import DXAPromoVideo from '../../assets/mainvideo/DXA Promo.mp4'; 
// Import local team photo so it can be shown in the carousel
import newMemberPhoto from '../../assets/photos/0E5A0411.JPG';

function HomePage() {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;

    const videoElement = videoRef.current;
    
    // ATENȚIE: Am eliminat apelul videoElement.play() din useEffect.
    // Ne bazăm exclusiv pe atributele autoPlay și muted din JSX
    // pentru a asigura pornirea imediată.

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

  // Definim datele pentru membrii echipei
  const teamMembers = [
    // Use the local imported photo as the first gallery item
    { id: 1, name: "Ana Maria", role: "Coregraf Salsa", image: newMemberPhoto },
      { id: 2, name: "Daniel Radu", role: "Instructor Urban", image: 'https://picsum.photos/seed/daniel/500/700' },
      { id: 3, name: "Cristina Pop", role: "Manager Studio", image: 'https://picsum.photos/seed/cristina/500/700' },
      { id: 4, name: "Mihai Stoica", role: "Profesor Balet", image: 'https://picsum.photos/seed/mihai/500/700' },
      { id: 5, name: "Elena Vasiu", role: "Asistent Coregraf", image: 'https://picsum.photos/seed/elena/500/700' },
      { id: 6, name: "Alex Tudor", role: "Instructor Acro", image: 'https://picsum.photos/seed/alex/500/700' },
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
            muted // ESENȚIAL pentru autoplay imediat
            ref={videoRef}
            preload="auto" // Sugerează browserului să încarce fișierul imediat
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

      {/* === NOU CARUSEL INFINITE MOVING TEAM CAROUSEL (FULL WIDTH) === */}
      <section className="circular-gallery-wrapper">
          <h2 className="section-heading-dark">Cunoaște Echipa Noastră</h2>
          {/* Containerul caruselului este lăsat gol, astfel încât caruselul să poată fi Full-Width */}
          <div className="circular-gallery-container" style={{ margin: '40px auto 0' }}> 
              <InfiniteMovingTeamCarousel 
                  items={teamMembers}
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