// File: src/pages/Instructor/Nicoleta_Cristina/nicoletacristina.jsx

import React from 'react';
import './nicoletacristina.css';
import instructorPhoto from '../../../assets/images/nicoleta_cristina.png';

function NicoletaCristiana({ openInscriere }) {
    const instructor = {
        name: "Nicoleta Cristina",
        role: "Instructor Salsa & Bachata",
       bio: [
            "Dobrin Nicoleta Cristina este instructor de dans la Dance Xplosion Academy din Sibiu, unde predă cu pasiune și dedicare salsa, bachata și kizomba. Cu o experiență solidă în predare din 2016, Cris îmbină tehnica corectă cu o abordare prietenoasă, adaptată fiecărui cursant.\n",
            
            "\nOrele ei sunt structurate, clare și accesibile, fiind potrivite atât pentru începători, cât și pentru cei care doresc să își perfecționeze stilul și expresivitatea. Prin răbdare, energie pozitivă și atenție la detalii, Cris creează un mediu de învățare în care fiecare cursant se poate dezvolta în propriul ritm.\n",
            
            "Atmosfera creată la cursurile ei este una relaxată și prietenoasă, unde greșelile sunt parte din proces, iar progresul vine natural. Cris pune accent pe încredere, comunicare și plăcerea de a dansa, transformând fiecare oră într-o experiență plină de energie pozitivă.\n",
            
            "În ceea ce privește kizomba, Cris se remarcă printr-o pregătire constant actualizată, aducând la Sibiu concepte și tehnici moderne ale acestui stil, fiind una dintre puținele instructoare din Sibiu cu metode de predare moderne și o perspectivă actuală asupra kizombei. Cris aduce această artă dansului local printr-un mix echilibrat de structură, tehnică și emoție\n",
            
            "Prin formarea continuă și atenția acordată autenticității dansului, ea contribuie la dezvoltarea și înțelegerea corectă a kizombei în orașul nostru.\n",
            
            "Pe lângă salsa, bachata și kizomba, Cris susține cursuri pentru copii, lecții private, coregrafii personalizate și pregătirea dansului mirilor, adaptând stilul de predare fiecărui tip de cursant.\n"
        ],
        stats: [
            { label: "Experiență Dans", value: "21 Ani" },
            { label: "Experiență Predare", value: "16 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Dans Sportiv" },
        ],
        classes: ["Bachata Improver", "Incepatori mixt"],
        photo: instructorPhoto,
    };

    return (
        /* ADDED "nicoleta-style" CLASS HERE TO PREVENT CONFLICTS */
        <div className="instructor-page-container nicoleta-style">
            <div className="profile-card">
                <div className="profile-image-section">
                    <img 
                        src={instructor.photo} 
                        alt={`Portret ${instructor.name}`} 
                        className="instructor-main-photo" 
                    />
                    <div className="name-tag">
                        <h2>{instructor.name}</h2>
                        <p className="role-title">{instructor.role}</p>
                    </div>
                </div>
                
                <div className="profile-details-section">
                    <h3 className="section-title">Despre Instructor</h3>
                    {instructor.bio.map((paragraf, index) => (
                        <p key={index} className="bio-text">
                            {paragraf}
                        </p>
                    ))}

                    <div className="quote-box">
                        <span className="quote-icon">“</span>
                        <p className="instructor-quote">{instructor.quote}</p>
                        <span className="quote-icon quote-end">”</span>
                    </div>

                    <h3 className="section-title">Informații și Clase</h3>
                    <div className="stats-grid">
                        {instructor.stats.map((stat) => (
                            <div key={stat.label} className="stat-item">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="classes-section">
                        <span className="classes-title">Predă:</span>
                        <div className="class-tags-list">
                            {instructor.classes.map((className) => (
                                <span key={className} className="class-tag-item">{className}</span>
                            ))}
                        </div>
                    </div>
                    
                    <button className="cta-contact-instructor" onClick={openInscriere}>Înscrie-te la Cursuri</button>
                    <a href="#" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default NicoletaCristiana;