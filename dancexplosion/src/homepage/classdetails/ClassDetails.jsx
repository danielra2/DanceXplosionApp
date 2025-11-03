import React from 'react';
import './ClassDetails.css'; // Importăm stilurile dedicate

/**
 * Componentă pentru afișarea detaliilor despre clasele de dans.
 * Preia logica secțiunii 'Classes Showcase' din HomePage.jsx.
 */
function ClassDetails() {
  return (
    // Secțiunea 1: CLASSES SHOWCASE (RĂMÂNE ca secțiune de detalii)
    <section className="classes-showcase-section">
      <h2 className="section-heading-dark">Detalii Despre Clase</h2>
      <div className="classes-card-container">
        {/* Card 1: Hip-Hop */}
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Hip-Hop</h3>
            <p>Energie pură și freestyle pentru toți cei care iubesc ritmurile urbane.</p>
            <span className="class-tag">POPULAR</span>
          </div>
        </div>

        {/* Card 2: Contemporary */}
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Contemporary</h3>
            <p>Exprimă-te prin mișcări fluide și emoționale.</p>
            <span className="class-tag">NOU</span>
          </div>
        </div>

        {/* Card 3: Ballet */}
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
  );
}

export default ClassDetails;