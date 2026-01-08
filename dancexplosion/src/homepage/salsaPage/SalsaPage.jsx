import React from 'react';
import './SalsaPage.css';

const levels = [
    { name: "Beginner", description: "Bazele absolute: ritm, pași de bază și conexiunea partenerilor.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea bazei, figuri sociale simple și rotații.", target: "#improver" },
    { name: "Intermediate", description: "Tehnică avansată, muzicalitate complexă și figuri dinamice.", target: "#intermediate" },
];

function SalsaPage({ openInscriere }) {
    return (
        <div className="salsa-page-container">
            <section className="salsa-hero-section">
                <div className="hero-content-salsa">
                    <h1 className="salsa-title">Salsa <span className="accent-text">Începe Ritmul Latin.</span></h1>
                    <button onClick={openInscriere} className="cta-page-main" style={{ border: 'none', cursor: 'pointer' }}>Rezervă prin WhatsApp</button>
                </div>
            </section>

            <section id="levels" className="salsa-levels-section">
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            <span className="level-number">{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level" onClick={openInscriere}>Înscrie-te la {level.name}</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SalsaPage;