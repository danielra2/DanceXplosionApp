import React from 'react';
import './ClassDetails.css'; // Importăm stilurile dedicate

/**
 * Componentă pentru afișarea detaliilor despre clasele de dans.
 */
function ClassDetails() {
  return (
    // Secțiunea 1: CLASSES SHOWCASE
    <section className="classes-showcase-section">
      <h2 className="section-heading-dark">Niveluri și Clase Speciale</h2>
      <div className="classes-card-container">
        
        {/* Card 1: SALSA / BACHATA (NIVELURI) */}
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Salsa</h3>
            <p>De la pași de bază la figuri complexe. Disponibil pe 3 niveluri: Beginner, Improver, Intermediate.</p>
            <span className="class-tag">3 NIVELURI</span>
          </div>
        </div>

        {/* Card 2: CLASA MIXTĂ (NOU) */}
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Bachata</h3>
            <p>Clasa ideală pentru începători, combinând cele mai populare stiluri latino-americane.</p>
            <span className="class-tag">NOU START</span>
          </div>
        </div>

        {/* Card 3: KIZOMBA (NIVELURI) */}
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Kizomba</h3>
            <p>Ritmuri lente și mișcări senzuale. Ideal pentru conexiune și fluiditate.</p>
            <span className="class-tag">FLOW</span>
          </div>
        </div>
        <div className="class-showcase-card">
          <div className="card-image-placeholder"></div>
          <div className="card-info">
            <h3>Salsa & Bachata</h3>
            <p>Ritmuri lente și mișcări senzuale. Ideal pentru conexiune și fluiditate.</p>
            <span className="class-tag">FLOW</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClassDetails;