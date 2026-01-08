import React from 'react';
import './kizombaPage.css'; 

// Datele pentru niveluri
const levels = [
    { name: "Beginner", description: "Baza esențială: înțelegerea ritmului, pași de bază (saída, basic 1, 2, 3), și conexiunea cu partenerul.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea flow-ului și a conexiunii, introducerea mișcărilor laterale (laterals), block-uri și inversiuni simple.", target: "#improver" },
    { name: "Intermediate", description: "Muzicalitate avansată, mișcări complexe de Urban Kizz (isolation, tricks), și fluiditate în social dance.", target: "#intermediate" },
];

function KizombaPage({ openInscriere }) {
    return (
        <div className="kizomba-page-container">
            {/* === 1. HERO SECTION DEDICAT === */}
            <section className="kizomba-hero-section">
                <div className="hero-content-kizomba">
                    <h1 className="kizomba-title">
                        Kizomba: <span className="accent-text">Conexiune și Flow.</span>
                    </h1>
                    <p className="kizomba-pitch">
                        Lasă-te purtat de ritmurile senzuale ale Kizomba. Perfecționează-ți tehnica de lead/follow și descoperă plăcerea mișcării în armonie.
                    </p>
                    <button onClick={openInscriere} className="cta-page-main" style={{ border: 'none', cursor: 'pointer' }}>
                        Rezervă prin WhatsApp
                    </button>
                </div>
            </section>

            {/* === 2. NIVELURI CLARE === */}
            <section id="levels" className="kizomba-levels-section">
                <h2 className="section-heading-kizomba">Alege-ți Nivelul de Progres</h2>
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            <span className="level-number" style={{ color: '#FF7033' }}>{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level" onClick={openInscriere}>
                                Înscrie-te la {level.name}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 3. CLASA MIXTĂ === */}
            <section className="mixt-promo-section">
                <div className="mixt-content">
                    <h2 className="mixt-title">Începe cu Salsa & Bachata Mixt</h2>
                    <p className="mixt-description">
                        Dacă ești nou, începe cu cursul nostru Mixt pentru a prinde rapid baza muzicii latine!
                    </p>
                    <button className="cta-mixt" onClick={openInscriere}>Rezervă loc la Mixt</button>
                </div>
            </section>
        </div>
    );
}

export default KizombaPage;