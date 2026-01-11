import React from 'react';
import './ClassDetails.css'; 

import SalsaPhoto from '../../../assets/images/salsaphoto.jpg';
import BachataPhoto from '../../../assets/images/bachataphoto.jpg';
import KizombaPhoto from '../../../assets/images/kizomba.jpg'; 
import MixPhoto from '../../../assets/images/salsabachata.jpg';


function ClassDetails() {
  return (
    <section className="classes-showcase-section">
      <h2 className="section-heading-dark">Niveluri și Clase Speciale</h2>
      <div className="classes-card-container">
        
        {}
        <a href="#salsa" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={SalsaPhoto} 
                alt="Salsa Dance" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Salsa</h3>
              <p>De la pași de bază la figuri complexe. Disponibil pe 3 niveluri: Beginner, Improver, Intermediate.</p>
              <span className="class-tag">3 NIVELURI</span>
            </div>
          </div>
        </a>

        {}
        <a href="#bachata" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={BachataPhoto} 
                alt="Bachata Dance" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Bachata</h3>
              <p>Clasa ideală pentru începători, combinând cele mai populare stiluri latino-americane.</p>
              <span className="class-tag">NOU START</span>
            </div>
          </div>
        </a>

        {}
        <a href="#kizomba" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={KizombaPhoto} 
                alt="Kizomba Dance" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Kizomba</h3>
              <p>Ritmuri lente și mișcări senzuale. Ideal pentru conexiune și fluiditate.</p>
              <span className="class-tag">FLOW</span>
            </div>
          </div>
        </a>

        {}
        <div className="class-showcase-card">
          <div className="card-image-placeholder">
            {}
            <img 
              src={MixPhoto} 
              alt="Salsa & Bachata Mix" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="card-info">
            <h3>Salsa & Bachata</h3>
            <p>Clasă ce combină ritmurile de Salsa și Bachata pentru o experiență complexă.</p>
            <span className="class-tag">MIX</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClassDetails;