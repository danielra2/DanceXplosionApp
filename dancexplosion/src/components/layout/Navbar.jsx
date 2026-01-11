import React, { useState, useEffect } from 'react';
import DanceXplosionLogo from '../../assets/images/dancelogo.png';

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

  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <header className={headerClass}>
      <div className="logo">
        <a href="#top">
          <img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" />
        </a>
      </div>

      <nav className="nav-links">
        <a href="#top" className="nav-link-home">HOME</a>

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
        
        <button className="cta-nav" onClick={openLogin}>
          LOG IN
        </button>
      </nav>
    </header>
  );
}

export default Navbar;