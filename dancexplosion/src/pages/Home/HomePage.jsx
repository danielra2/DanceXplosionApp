import React, { useRef, useEffect, useState } from 'react'; 
import Hls from 'hls.js';
import './HomePage.css';
import InfiniteMovingTeamCarousel from '../../features/CircularGallery/CircularGallery'; 
import ClassDetails from '../../features/classes/ClassDetails/ClassDetails'; 
import ScheduleTable from '../../features/schedule/ScheduleTable/ScheduleTable'; 
import DXPLogo from '../../assets/icons/DXPlogo.png';

function HomePage({ openInscriere, openWIP }) {
  const heroSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userUnmuted, setUserUnmuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hlsSource = "/video/playlist.m3u8"; 

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video is already ready (instant load)
    if (video.readyState >= 3) {
      setIsLoading(false);
    } else {
      // If not ready instantly, enforce a minimum display time for the animation (full pulse)
      const minLoadTimePromise = new Promise(resolve => setTimeout(resolve, 2000));
      const videoLoadPromise = new Promise(resolve => {
        const handleLoad = () => {
          resolve();
          video.removeEventListener('loadeddata', handleLoad);
        };
        video.addEventListener('loadeddata', handleLoad);
        // Fallback if event misses
        if (video.readyState >= 3) resolve();
      });

      Promise.all([minLoadTimePromise, videoLoadPromise]).then(() => {
        setIsLoading(false);
      });
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState) setUserUnmuted(true);
    }
  };

  return (
    <div className="homepage-container" id="top">
      {isLoading && (
        <div className="loading-overlay">
          <img src={DXPLogo} alt="Loading..." className="loading-logo" />
        </div>
      )}

      <section className="hero-section" ref={heroSectionRef}>
        <video 
          ref={videoRef} 
          className="hero-background-video" 
          autoPlay 
          loop 
          playsInline 
          muted={isMuted} 
          preload="auto" 
        />
        <button className="unmute-button" onClick={toggleMute}>
          {isMuted ? '🔊 Cu sunet' : '🔇 Fără sunet'}
        </button>
        <div className="video-overlay"></div>
        <div className="hero-content-wrapper">
          <h1 className="hero-title">
            <span className="title-word delay-1">ÎNCEPE</span>{' '}
            <span className="title-word accent-color-text delay-2">MIȘCAREA</span>{' '}
            <span className="title-word accent-color-text delay-3">TA.</span>
          </h1>
          <p className="hero-pitch">Academia ta de dans din Sibiu.</p>
          <div className="hero-cta-group">
            <button className="cta-primary-dark" onClick={openInscriere}>REZERVĂ UN CURS DE PROBĂ</button>
            <a href="#orarul-tau" className="cta-secondary-accent button-as-link">ORARUL NOSTRU</a>
          </div>
        </div>
      </section>

      <section className="circular-gallery-wrapper">
        <h2 className="section-heading-dark">Faceți cunoștință cu echipa Dance Explosion</h2>
        <div className="circular-gallery-container">
          <InfiniteMovingTeamCarousel />
        </div>
      </section>

      <ClassDetails /> 
      
      <section id="orarul-tau"> 
        <ScheduleTable openInscriere={openInscriere} />
      </section>

      <section className="lxf-promo-section" id="lxf">
        <div className="lxf-content-dark">
          <h2 className="lxf-title">LXF 2025</h2>
          <p className="lxf-description">Cel mai mare festival de dans din Transilvania. Pregătește-te pentru spectacol!</p>
          <button className="cta-lxf-gold" onClick={openWIP}>AFLĂ MAI MULTE</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;  