// src/homepage/HomePage.jsx

import React, { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './HomePage.css';

function HomePage() {
  const dotLottieRef = useRef(null);

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

      {/* === HERO SECTION === */}
      <section className="hero-section">
        {/* ANIMAȚIE LOTTIE PE FUNDAL */}
        <div className="lottie-background lottie-left">
          <DotLottieReact 
            src="https://lottie.host/your-animation1.lottie" 
            loop 
            autoplay 
          />
        </div>
        <div className="lottie-background lottie-right">
          <DotLottieReact 
            src="https://lottie.host/your-animation2.lottie" 
            loop 
            autoplay 
          />
        </div>

        {/* MESH ANIMAT (opțional - poți păstra sau elimina) */}
        <div className="background-dance-mesh"></div>

        {/* CONȚINUT HERO */}
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
          <button className="cta-lxf-gold">AFLĂ MAI MULTE</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;