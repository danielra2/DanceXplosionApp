import React, { useState, useEffect } from 'react';
import DanceXplosionLogo from '../../assets/images/dancelogo.png';
import './Navbar.css';

function Navbar({ openLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#top">
          <img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" />
        </a>
      </div>

      <nav className="nav-links">
        <a href="#top" className="nav-item">HOME</a>

        {}
        <div className="dropdown-container">
          <a href="#clase" className="nav-item dropdown-trigger">
            CLASE 
          </a>
          <div className="dropdown-menu">
            <a href="#salsa">Salsa</a>
            <a href="#bachata">Bachata</a>
            <a href="#kizomba">Kizomba</a>
            <a href="#mixed" className="mixt-link">Clasă Mixtă</a>
          </div>
        </div>

        <a href="#lxf" className="nav-item">LXF</a>
        
        <button className="cta-nav" onClick={openLogin}>
          LOG IN
        </button>
      </nav>
    </header>
  );
}

export default Navbar;