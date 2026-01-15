import React from 'react';
import './ClassDetails.css'; 

import SalsaPhoto from '../../../assets/images/salsaphoto.jpg';
import BachataPhoto from '../../../assets/images/bachataphoto.jpg';
import KizombaPhoto from '../../../assets/images/kizomba.jpg'; 
import MixPhoto from '../../../assets/images/salsabachata.jpg';


function ClassDetails() {
  return (
    <section className="classes-showcase-section">
      <h2 className="section-heading-dark">Niveluri și Cursuri Speciale</h2>
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
              <p>De la primii pași la coregrafii complexe. Disponibil pe 3 categorii: începător, intermediar, avansat.</p>
              <span className="class-tag">DETALII ȘI PROGRAM</span>
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
              <p>Cursul ideal pentru începători, combinând cele mai populare stiluri latino-americane.</p>
              <span className="class-tag">DETALII ȘI PROGRAM</span>
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
              <p>Ritm lent de care te vei îndrăgosti.</p> 
              <span className="class-tag">DETALII ȘI PROGRAM</span>
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
            <p>Nu te poți horărî? Încearcă-le pe ambele.</p>
            <span className="class-tag">DETALII ȘI PROGRAM</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClassDetails;