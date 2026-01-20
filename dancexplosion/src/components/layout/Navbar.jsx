import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ openLogin, isHome }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      setIsScrolled(window.scrollY > 50);
    } else {
      setIsScrolled(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const headerClass = isScrolled ? 'main-nav scrolled' : 'main-nav';

  return (
    <header className={headerClass}>
      <nav className="nav-links">
        <a href="#top">ACASĂ</a>

        <div className="dropdown-container">
          <a href="#clase" className="dropdown-trigger">
            CURSURI <span className="arrow-icon">▾</span>
          </a>
          <div className="dropdown-menu">
            <a href="#salsa">Salsa</a>
            <a href="#bachata">Bachata</a>
            <a href="#kizomba">Kizomba</a>
            <div className="dropdown-divider"></div>
            <a href="#mixed" className="mixt-link">Curs Mixt</a>
          </div>
        </div>

        {/* UPDATED LINK: Points to the internal page */}
        <a href="#dansul-mirilor" className="wedding-link">
          DANSUL MIRILOR
        </a>

        <a href="#lxf">LXF</a>
        
        <button className="cta-nav" onClick={openLogin}>
          AUTENTIFICARE
        </button>
        <button className="cta-nav" onClick={openLogin}> 
          ÎNREGISTRARE 
        </button>  
      </nav>
    </header>
  );
}

export default Navbar;