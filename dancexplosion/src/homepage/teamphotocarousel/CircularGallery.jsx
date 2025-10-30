import React, { useRef, useEffect } from 'react';
import './CircularGalery.css';

// Componentă: InfiniteMovingTeamCarousel (AUTO-PLAY FULL-WIDTH)

const teamMembersData = [
    // Am adăugat nume și roluri, presupunând că acestea sunt datele pentru membrii echipei
    { id: 1, name: "Ana Maria", role: "Coregraf Salsa", image: 'https://picsum.photos/seed/ana/500/700' },
    { id: 2, name: "Daniel Radu", role: "Instructor Urban", image: 'https://picsum.photos/seed/daniel/500/700' },
    { id: 3, name: "Cristina Pop", role: "Manager Studio", image: 'https://picsum.photos/seed/cristina/500/700' },
    { id: 4, name: "Mihai Stoica", role: "Profesor Balet", image: 'https://picsum.photos/seed/mihai/500/700' },
    { id: 5, name: "Elena Vasiu", role: "Asistent Coregraf", image: 'https://picsum.photos/seed/elena/500/700' },
    { id: 6, name: "Alex Tudor", role: "Instructor Acro", image: 'https://picsum.photos/seed/alex/500/700' },
];

const InfiniteMovingTeamCarousel = ({ items = teamMembersData, speed = '60s' }) => {
    
    const duplicateItems = [...items, ...items]; // Duplicăm pentru bucla infinită CSS
    
    // Logica de click care simulează navigarea
    const handleCardClick = (item) => {
        // Înlocuiți această funcție cu logica reală de rutare (e.g., navigate(url))
        const url = `/instructor/${item.id}/${item.name.replace(/\s/g, '-')}`;
        console.log(`Navigare simulată către: ${url}`);
        alert(`Navigare simulată la pagina instructorului: ${item.name}. (În realitate, ați fi redirecționat)`);
    };

    return (
        <div className="infinite-carousel-container">
            <div 
                className="infinite-carousel-track" 
                style={{ animationDuration: speed }}
            >
                {duplicateItems.map((item, index) => (
                    <div 
                        key={`${item.id}-${index}`} 
                        className="team-card-infinite"
                        onClick={() => handleCardClick(item)}
                    >
                        <div className="card-photo-wrapper">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="member-photo-infinite" 
                            />
                        </div>
                        <div className="card-overlay-infinite">
                            <h3 className="member-name-infinite">{item.name}</h3>
                            <p className="member-role-infinite">{item.role}</p>
                            <span className="cta-overlay-infinite">Detalii & Orar</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exportăm noua componentă
export default InfiniteMovingTeamCarousel;