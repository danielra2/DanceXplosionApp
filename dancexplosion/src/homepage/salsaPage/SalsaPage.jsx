import React from 'react';
import './SalsaPage.css';

// Componentă: SalsaPage (Pagina de Prezentare Salsa & Bachata)

const levels = [
    { name: "Beginner", description: "Bazele absolute: ritm, pași de bază și conexiunea partenerilor. Perfect pentru zero experiență.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea bazei, figuri sociale simple, rotații individuale și de cuplu. Necesită 3-6 luni de experiență.", target: "#improver" },
    { name: "Intermediate", description: "Tehnică avansată, muzicalitate complexă, și figuri dinamice. Pregătire pentru nivel social superior.", target: "#intermediate" },
];

function SalsaPage() {
    return (
        <div className="salsa-page-container">
            {/* === 1. HERO SECTION DEDICAT === */}
            <section className="salsa-hero-section">
                <div className="hero-content-salsa">
                    <h1 className="salsa-title">
                        Salsa & Bachata: <span className="accent-text">Începe Ritmul Latin.</span>
                    </h1>
                    <p className="salsa-pitch">
                        Descoperă eleganța, energia și conexiunea în cele mai populare stiluri de dans social. De la primele mișcări la ritmuri avansate.
                    </p>
                    <a href="#levels" className="cta-page-main">Explorează Nivelurile</a>
                </div>
            </section>

            {/* === 2. NIVELURI CLARE === */}
            <section id="levels" className="salsa-levels-section">
                <h2 className="section-heading-salsa">Alege-ți Nivelul de Progres</h2>
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            <span className="level-number">{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level">Înscrie-te la {level.name}</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 3. CLASA MIXTĂ (Evidențiată) === */}
            <section className="mixt-promo-section">
                <div className="mixt-content">
                    <h2 className="mixt-title">Clasa Mixtă Beginner</h2>
                    <p className="mixt-description">
                        **NOU!** Introducere rapidă în Salsa și Bachata. O singură clasă, două stiluri esențiale pentru a te pregăti rapid pentru ringul de dans.
                    </p>
                    <button className="cta-mixt">Vezi Orarul Mixt</button>
                </div>
            </section>
        </div>
    );
}

export default SalsaPage;