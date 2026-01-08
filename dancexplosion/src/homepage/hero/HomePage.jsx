import React, { useRef, useEffect, useState } from 'react'; 
import Hls from 'hls.js';
import './HomePage.css';
import InfiniteMovingTeamCarousel from '../teamphotocarousel/CircularGallery'; 
import ClassDetails from '../classdetails/ClassDetails'; 
import ScheduleTable from '../schedule/ScheduleTable'; 

function HomePage({ openInscriere }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userUnmuted, setUserUnmuted] = useState(false);

  const hlsSource = "/video/playlist.m3u8"; 

  // Logica pentru Streaming Video (HLS)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(error => {
          console.log("Autoplay blocat de browser:", error);
        });
      });

      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
    }
  }, []);

  // Sincronizare stare Mute
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVolumeChange = () => {
      setIsMuted(video.muted);
      if (!video.muted) setUserUnmuted(true);
    };

    video.addEventListener('volumechange', handleVolumeChange);
    return () => video.removeEventListener('volumechange', handleVolumeChange);
  }, []);

  // Control Play/Pause la scroll (Intersection Observer)
  useEffect(() => {
    if (!heroSectionRef.current || !videoRef.current) return;
    
    const videoElement = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.muted = !userUnmuted;
          setIsMuted(!userUnmuted);
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
  }, [userUnmuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState) {
        setUserUnmuted(true);
      }
    }
  };

  return (
    /* ID="top" adăugat pentru a permite scroll-ul de la butonul HOME din Navbar */
    <div className="homepage-container" id="top">
      
      <section className="hero-section" ref={heroSectionRef}>
        <video 
          ref={videoRef}
          className="hero-background-video"
          autoPlay 
          loop 
          playsInline 
          muted={isMuted} 
          preload="auto" 
        >
          Browserul tău nu suportă elementul video.
        </video>
        
        {/* Buton Mute/Unmute */}
        <button 
          className="unmute-button" 
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? '🔊 Cu sunet' : '🔇 Fără sunet'}
        </button>
        
        <div className="video-overlay"></div>

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
            <a href="#orarul-tau" className="cta-secondary-accent button-as-link">
              VEZI ORARUL
            </a>
          </div>
        </div>
      </section>

      {/* Secțiunea Echipa */}
      <section className="circular-gallery-wrapper">
        <h2 className="section-heading-dark">Cunoaște Echipa Noastră</h2>
        <div className="circular-gallery-container">
          <InfiniteMovingTeamCarousel />
        </div>
      </section>

      {/* Secțiunea Detalii Clase */}
      <ClassDetails /> 
      
      {/* Secțiunea Orar */}
      <section id="orarul-tau"> 
        <ScheduleTable />
      </section>

      {/* Secțiunea LXF Promo / Footer */}
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