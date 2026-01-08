import React from 'react';
import DanceXplosionLogo from '../assets/photos/dancelogo.png';

function Navbar({ openLogin }) {
  const headerClass = 'main-nav';

  return (
    <header className={headerClass}>
      <div className="logo">
        {/* Logo pointing to the top anchor */}
        <a href="#top">
          <img src={DanceXplosionLogo} alt="Dance Xplosion Logo" className="logo-img" />
        </a>
      </div>

      <nav className="nav-links">
        {/* HOME button now works exactly like the LXF button below */}
        <a href="#top" className="nav-link-home">
          HOME
        </a>

        <div className="dropdown-container">
          <a href="#clase" className="nav-link-main">CLASE</a>
          <div className="dropdown-menu simplified">
            <a href="#salsa" className="class-type-main">Salsa</a>
            <a href="#bachata" className="class-type-main">Bachata</a>
            <a href="#kizomba" className="class-type-main">Kizomba</a>
            <a href="#mixed" className="class-type-main mixt-link">Clasă Mixtă (Beginner)</a>
          </div>
        </div>

        {/* This is your working LXF button for reference */}
        <a href="#lxf">LXF</a>
        
        <button className="cta-nav" onClick={openLogin}>
          LOG IN
        </button>
      </nav>
    </header>
  );
}

export default Navbar;