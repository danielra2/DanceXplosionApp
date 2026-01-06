import React from 'react';
import './instructorPage.css';
import malePhoto from '../../assets/photos/0E5A0375.JPG'; 

// Componentă: InstructorPage (Pagina de Profil Instructor)
function InstructorPage() {
    // Datele instructorului furnizate de utilizator
    const instructor = {
        name: "Alex Lazar",
        role: "Instructor Salsa & Bachata",
        bio: "Cu 21 de ani de experiență în dans și 16 ani de predare, Alex a început cu dans sportiv și a concurat timp de 8 ani în competiții naționale și internaționale. A obținut o diplomă de antrenor pentru dans sportiv în 2014 și una de coregraf profesionist în 2022. Și-a găsit noua pasiune în dansul social în 2019, când a început Bachata și Salsa la Dance Xplosion Academy, predând din 2023. Clasele lui sunt foarte antrenante și veți învăța mereu ceva nou. Citatul său favorit este: 'Anyone can learn how to dance, you just need to be patient with you and your rhythm of learning.'",
        quote: "Anyone can learn how to dance, you just need to be patient with you and your rhythm of learning.",
        stats: [
            { label: "Experiență Dans", value: "21 Ani" },
            { label: "Experiență Predare", value: "16 Ani" },
            { label: "Specializare", value: "Salsa, Bachata, Dans Sportiv" },
        ],
        classes: ["Bachata Beginner", "Salsa Improver", "Clasă Mixtă"],
        photo: malePhoto, // Folosim poza existentă
    };

    return (
        <div className="instructor-page-container">
            <div className="profile-card">
                
                <div className="profile-image-section">
                    {/* Folosiți instructor.photo pentru poza reală */}
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
                    <p className="bio-text">{instructor.bio}</p>

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
                    
                    <button className="cta-contact-instructor">Înscrie-te la Cursuri</button>
                    <a href="#" className="back-link">← Înapoi la Pagină Principală</a>
                </div>
            </div>
        </div>
    );
}

export default InstructorPage;