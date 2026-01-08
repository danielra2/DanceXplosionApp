import React from 'react';
import './BachataPage.css';

// Componentă: BachataPage (Pagina de Prezentare Bachata)

const levels = [
    { name: "Beginner", description: "Învață ritmul, pașii de bază și mișcarea șoldului, esențiale pentru dansul social.", target: "#beginner" },
    { name: "Improver", description: "Stăpânirea figurilor simple, valuri corporale (body waves) și styling de bază.", target: "#improver" },
    { name: "Intermediate", description: "Tehnică modernă și sensual, muzicalitate, variații de ritm și izolari avansate.", target: "#intermediate" },
];

function BachataPage({ openInscriere }) {
    return (
        <div className="bachata-page-container">
            {/* === 1. HERO SECTION DEDICAT === */}
            <section className="bachata-hero-section">
                <div className="hero-content-bachata">
                    <h1 className="bachata-title">
                        Bachata: <span className="accent-text-bachata">Pasiune și Eleganță.</span>
                    </h1>
                    <p className="bachata-pitch">
                        Stilul de dans social care pune accentul pe conexiunea cu partenerul, fluiditate și senzualitate.
                    </p>
                    <button onClick={openInscriere} className="cta-page-main-bachata" style={{ border: 'none', cursor: 'pointer' }}>
                        Rezervă prin WhatsApp
                    </button>
                </div>
            </section>

            {/* === 2. NIVELURI CLARE === */}
            <section id="levels" className="bachata-levels-section">
                <h2 className="section-heading-bachata">Alege-ți Nivelul de Bachata</h2>
                <div className="levels-card-container-bachata">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card-bachata">
                            <span className="level-number">{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level-bachata" onClick={openInscriere}>
                                Înscrie-te la {level.name}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 3. PROMO CLASA MIXTĂ === */}
            <section className="mixt-promo-section-bachata">
                <div className="mixt-content-bachata">
                    <h2 className="mixt-title-bachata">Clasa Mixtă Beginner</h2>
                    <p className="mixt-description-bachata">
                        Combină bazele Salsa și Bachata într-un singur program accelerat. Excelent pentru un start rapid!
                    </p>
                    <button className="cta-mixt-bachata" onClick={openInscriere}>Rezervă loc la Mixt</button>
                </div>
            </section>
        </div>
    );
}

export default BachataPage;