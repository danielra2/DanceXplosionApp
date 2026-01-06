import React, { useRef, useEffect, useState } from 'react'; 
import Hls from 'hls.js'; //
import './HomePage.css';
import InfiniteMovingTeamCarousel from '../teamphotocarousel/CircularGallery'; 
import ClassDetails from '../classdetails/ClassDetails'; 
import ScheduleTable from '../schedule/ScheduleTable'; 
import DanceXplosionLogo from '../../assets/photos/dancelogo.png'; 

function HomePage({ openInscriere, openLogin }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Calea către fișierul generat de FFmpeg aflat în public/video/
  const hlsSource = "/video/playlist.m3u8"; 

  // Logica pentru Redare Video HLS (Streaming)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Încercăm autoplay după ce manifestul este încărcat
        video.play().catch(error => {
          console.log("Autoplay blocat de browser (este nevoie de interacțiune sau muted):", error);
        });
      });

      return () => {
        hls.destroy(); // Curățăm resursele la demontarea componentei
      };
    } 
    // Suport nativ pentru Safari / iOS (care nu au nevoie de hls.js)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
    }
  }, []);

  // Logica pentru Control Sound/Pause la Scroll (Intersection Observer)
  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;
    
    const videoElement = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.muted = true; // Recomandat true pentru a evita blocarea autoplay-ului
          videoElement.play().catch(() => {});
        } else {
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

  // Logica pentru Control Header (Scroll Event)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <div className="homepage-container">
      
      {/* === NAVIGARE (HEADER) === */}
      <header className={headerClass}>
        <div className="logo">
          <img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <div className="dropdown-container">
            <a href="#clase" className="nav-link-main">CLASE</a>
            <div className="dropdown-menu simplified">
              <a href="#salsa" className="class-type-main">Salsa</a>
              <a href="#bachata" className="class-type-main">Bachata</a>
              <a href="#kizomba" className="class-type-main">Kizomba</a>
              <a href="#mixed" className="class-type-main mixt-link">Clasă Mixtă (Beginner)</a>
            </div>
          </div>
          
          <a href="#lxf">LXF</a>
          <button className="cta-nav cta-primary-dark" onClick={openLogin}>LOG IN</button>
        </nav>
      </header>

      {/* === HERO SECTION CU VIDEO FUNDAL === */}
      <section className="hero-section" ref={heroSectionRef}>
        
        {/* Observă că am scos atributul src de aici, se ocupă useEffect-ul de el */}
        <video 
          ref={videoRef}
          className="hero-background-video"
          autoPlay 
          loop 
          playsInline 
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
            <button className="cta-primary-dark" onClick={openInscriere}>
              REZERVĂ O CLASĂ DE PROBĂ
            </button>
            <a href="#orarul-tau" className="cta-secondary-accent button-as-link">VEZI ORARUL</a>
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

      <ClassDetails /> 
      
      <section id="orarul-tau"> 
        <ScheduleTable />
      </section>

      <section className="lxf-promo-section" id="lxf">
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