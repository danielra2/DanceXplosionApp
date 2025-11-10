import React from 'react';

// Importăm stilurile dedicate
import './KizombaPage.css'; 

// Datele pentru niveluri
const levels = [
    { name: "Beginner", description: "Baza esențială: înțelegerea ritmului, pași de bază (saída, basic 1, 2, 3), și conexiunea cu partenerul.", target: "#beginner" },
    { name: "Improver", description: "Consolidarea flow-ului și a conexiunii, introducerea mișcărilor laterale (laterals), block-uri și inversiuni simple. Necesită 3-6 luni de experiență.", target: "#improver" },
    { name: "Intermediate", description: "Muzicalitate avansată, mișcări complexe de Urban Kizz (isolation, tricks), și fluiditate în social dance.", target: "#intermediate" },
];

function KizombaPage() {
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
                    <a href="#levels" className="cta-page-main">Explorează Nivelurile</a>
                </div>
            </section>

            {/* === 2. NIVELURI CLARE === */}
            <section id="levels" className="kizomba-levels-section">
                <h2 className="section-heading-kizomba">Alege-ți Nivelul de Progres</h2>
                <div className="levels-card-container">
                    {levels.map((level, index) => (
                        <div key={level.name} className="level-card">
                            {/* Folosim un număr diferit de accent pentru a distinge vizual de Salsa */}
                            <span className="level-number" style={{ color: '#6A0572' }}>{index + 1}</span>
                            <h3>{level.name}</h3>
                            <p>{level.description}</p>
                            <button className="cta-level">Înscrie-te la {level.name}</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 3. CLASA MIXTĂ (Promo Bar - Păstrăm referința la Mixt) === */}
            <section className="mixt-promo-section">
                <div className="mixt-content">
                    <h2 className="mixt-title">Începe cu Salsa & Bachata Mixt</h2>
                    <p className="mixt-description">
                        Dacă ești nou, începe cu cursul nostru Mixt pentru a prinde rapid baza muzicii latine!
                    </p>
                    <button className="cta-mixt">Vezi Detalii Curs Mixt</button>
                </div>
            </section>
        </div>
    );
}

// Trebuie să adăugăm noua componentă în export-ul index (dacă ar fi o librărie), dar aici o vom folosi direct în App.jsx
// Nu este necesară o altă acțiune aici, dar o vom salva ca fișier nou.
export default KizombaPage;