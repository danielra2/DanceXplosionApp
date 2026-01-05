// src/homepage/lxf/LXFPromo.jsx

import React from 'react';
import './LXFPromo.css'; // Importăm stilurile dedicate

/**
 * Componentă pentru afișarea secțiunii de promovare a festivalului LXF.
 * Această secțiune servește și ca footer al paginii.
 */
function LXFPromo() {
  return (
    <section className="lxf-promo-section" id="lxf">
      <div className="lxf-content-dark">
        <h2 className="lxf-title">LXF 2025</h2>
        <p className="lxf-description">
          Cel mai mare festival de dans din Transilvania. Pregătește-te pentru spectacol!
        </p>
        <button className="cta-lxf-gold">AFLĂ MAI MULTE</button>
      </div>
    </section>
  );
}

export default LXFPromo;