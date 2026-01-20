import React from 'react';
import './WeddingDancePage.css';

// Packages data
const packages = [
    { 
        name: "Pachet Clasic", 
        description: "5 ședințe private. Învățăm pașii de bază și o coregrafie simplă, elegantă și naturală pe melodia voastră.", 
    },
    { 
        name: "Pachet Gold", 
        description: "10 ședințe private. Coregrafie complexă, editare muzicală inclusă (colaj) și consultanță pentru scenografie.", 
    },
    { 
        name: "Last Minute", 
        description: "3 ședințe intensive. Pentru cuplurile care au lăsat dansul pe ultima sută de metri. Simplu și de efect.", 
    },
];

function WeddingDancePage({ openInscriere }) {
    return (
        <div className="wedding-page-container">
            {/* Hero Section */}
            <section className="wedding-hero-section">
                <div className="hero-content-wedding">
                    <h1 className="wedding-title">
                        Dansul Mirilor <span className="accent-text-wedding">Povestea voastră, ritmul vostru.</span>
                    </h1>
                    <p className="wedding-pitch">
                        Scăpați de emoții și bucurați-vă de cel mai frumos moment al serii. 
                        Oferim lecții private, coregrafii personalizate și o atmosferă relaxată.
                    </p>
                    <button onClick={openInscriere} className="cta-page-main-wedding">
                        Programează o ședință pe WhatsApp
                    </button>
                </div>
            </section>

            {/* Packages Section */}
            <section id="pachete" className="wedding-levels-section">
                <h2 className="section-heading-wedding">Pachetele Noastre</h2>
                <div className="levels-card-container-wedding">
                    {packages.map((pkg, index) => (
                        <div key={pkg.name} className="level-card-wedding">
                            <span className="level-number">{index + 1}</span>
                            <h3>{pkg.name}</h3>
                            <p>{pkg.description}</p>
                            <button className="cta-level-wedding" onClick={openInscriere}>
                                Vreau detalii
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Private Lessons Promo Section */}
            <section className="mixt-promo-section-wedding">
                <div className="mixt-content-wedding">
                    <h2 className="mixt-title-wedding">Lecții Private 1 la 1</h2>
                    <p className="mixt-description-wedding">
                        Beneficiați de sala noastră exclusiv pentru voi și instructor dedicat. 
                        Program flexibil în funcție de timpul vostru liber (dimineața, seara sau în weekend).
                    </p>
                    <button className="cta-mixt-wedding" onClick={openInscriere}>Contactează-ne pe WhatsApp</button>
                </div>
            </section>
        </div>
    );
}

export default WeddingDancePage;