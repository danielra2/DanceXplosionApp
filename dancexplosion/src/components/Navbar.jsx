import React, { useState, useEffect } from 'react';
import DanceXplosionLogo from '../assets/photos/dancelogo.png';

function Navbar({ openLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 20px, add the background (scrolled class)
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Uses the .main-nav.scrolled CSS from your HomePage.css
  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <header className={headerClass}>
      <div className="logo">
        <a href="#"><img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" /></a>
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
  );
}

export default Navbar;