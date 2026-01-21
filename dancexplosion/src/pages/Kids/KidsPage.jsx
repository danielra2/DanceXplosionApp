import React from 'react';
import './KidsPage.css';

const groups = [
    { 
        age: "4 - 6 Ani", 
        title: "Mini Dancers",
        description: "Introducere în lumea dansului prin jocuri de ritm, coordonare și mișcare creativă. Dezvoltăm urechea muzicală și postura într-un mod distractiv.",
    },
    { 
        age: "7 - 9 Ani", 
        title: "Junior Stars",
        description: "Învățăm pașii de bază din dansuri latino și moderne. Focus pe disciplină, lucrul în echipă, memorarea coregrafiilor și încredere în sine.",
    },
    { 
        age: "10 - 14 Ani", 
        title: "Teen Crew",
        description: "Coregrafii complexe, stiluri moderne și pregătire pentru performanță (Trupa DXS). Pentru copiii care vor să ducă dansul la nivelul următor.",
    },
];

function KidsPage({ openInscriere }) {
    return (
        <div className="kids-page-container">
            {/* Hero Section */}
            <section className="kids-hero-section">
                <div className="hero-content-kids">
                    <h1 className="kids-title">
                        Dans pentru Copii <span className="accent-text-kids">Energie. Disciplină. Distracție.</span>
                    </h1>
                    <p className="kids-pitch">
                        Oferă-i copilului tău șansa să se dezvolte armonios prin dans. 
                        Cursuri adaptate pentru toate vârstele, într-un mediu sigur și prietenos.
                    </p>
                    <button onClick={openInscriere} className="cta-page-main-kids">
                        Înscrie-l la o probă
                    </button>
                </div>
            </section>

            {/* Groups Section */}
            <section id="grupe" className="kids-groups-section">
                <h2 className="section-heading-kids">Grupe de Vârstă</h2>
                <div className="groups-card-container">
                    {groups.map((group, index) => (
                        <div key={group.age} className="group-card">
                            <span className="group-age-badge">{group.age}</span>
                            <h3>{group.title}</h3>
                            <p>{group.description}</p>
                            <button className="cta-group" onClick={openInscriere}>
                                Detalii Grupa {group.age}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="kids-benefits-section">
                <div className="benefits-content">
                    <h2 className="benefits-title">De ce Dansul?</h2>
                    <ul className="benefits-list">
                        <li>🎭 <strong>Socializare:</strong> Copiii își fac prieteni noi și învață să lucreze în echipă.</li>
                        <li>🧘 <strong>Postură Corectă:</strong> Prevenim pozițiile vicioase și dezvoltăm o ținută elegantă.</li>
                        <li>🧠 <strong>Focus & Memorie:</strong> Învățarea coregrafiilor stimulează concentrarea și memoria.</li>
                        <li>⚡ <strong>Energie Pozitivă:</strong> Consumăm energia într-un mod constructiv și sănătos.</li>
                    </ul>
                    <button className="cta-benefits" onClick={openInscriere}>Contactează-ne pe WhatsApp</button>
                </div>
            </section>
        </div>
    );
}

export default KidsPage;