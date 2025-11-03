import React, { useRef, useEffect } from 'react';
import './CircularGalery.css';

// Importul pozei locale RĂMÂNE AICI
import newMemberPhoto from '../../assets/photos/0E5A0411.JPG'; 
import malePhoto from '../../assets/photos/0E5A0375.JPG';

// --- Funcție ajutătoare pentru a citi poziția reală a animației CSS (translateX) ---
// Această funcție este cheia pentru a evita săritura la hover.
const getRunningTransformOffset = (element) => {
    const style = window.getComputedStyle(element);
    const transform = style.transform;
    if (transform === 'none') return 0;
    
    // Extrage valoarea translateX din matricea CSS (matrix sau matrix3d)
    const matrix = transform.match(/matrix(3d)?\((.*)\)/);
    if (matrix) {
        const values = matrix[2].split(', ').map(parseFloat);
        // Indexul 4 este pentru translateX în matricea 2D
        return values.length === 16 ? values[12] : values[4]; 
    }
    return 0;
};


const teamMembersData = [
    { id: 1, name: "Ana Maria", role: "Coregraf Salsa", image: newMemberPhoto },
    { id: 2, name: "Daniel Radu", role: "Instructor Urban", image: malePhoto },
    { id: 3, name: "Cristina Pop", role: "Manager Studio", image: 'https://picsum.photos/seed/cristina/500/700' },
    { id: 4, name: "Mihai Stoica", role: "Profesor Balet", image: 'https://picsum.photos/seed/mihai/500/700' },
    { id: 5, name: "Elena Vasiu", role: "Asistent Coregraf", image: 'https://picsum.photos/seed/elena/500/700' },
    { id: 6, name: "Alex Tudor", role: "Instructor Acro", image: 'https://picsum.photos/seed/alex/500/700' },
];

const InfiniteMovingTeamCarousel = ({ items = teamMembersData, initialSpeed = '30s', slowedSpeed = '120s' }) => {
    
    const duplicateItems = [...items, ...items];
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    
    // --- Logica de Hover pentru încetinire (FĂRĂ JUMP) ---
    const handleMouseEnter = () => {
        const track = trackRef.current;
        if (!track) return;
        
        // 1. Punem pe pauză pentru a citi poziția exactă
        track.style.animationPlayState = 'paused';
        
        // 2. Citim poziția curentă în pixeli (valoare negativă)
        const currentOffsetPx = getRunningTransformOffset(track);

        // 3. Citim lățimea totală a mișcării (este jumătate din scrollWidth)
        // Folosim clientWidth al track-ului, deoarece scrollWidth/2 nu este precis din cauza marginilor.
        const totalTrackWidth = track.clientWidth / 2; 

        // 4. Calculăm procentul de parcurgere al animației (de la 0 la 1)
        const offsetPercentage = Math.abs(currentOffsetPx) / totalTrackWidth;
        
        // 5. Calculăm delay-ul NEGATIV necesar pentru a relua animația lentă de la acest procentaj
        const newDelay = parseFloat(slowedSpeed) * offsetPercentage; 

        // 6. Oprim animația CSS existentă
        track.style.animation = 'none';
        
        // 7. Setăm poziția statică a track-ului pe baza ofsetului citit
        track.style.transform = `translateX(${currentOffsetPx}px)`;
        
        // 8. Forțăm un reflow (pentru a aplica setarea transform înainte de a relua animația)
        void track.offsetHeight;
        
        // 9. Reaplicăm animația cu noua durată și delay (lent)
        track.style.animation = `infinite-scroll ${slowedSpeed} linear infinite`;
        track.style.animationDelay = `-${newDelay}s`;
        track.style.animationPlayState = 'running';
        
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        const track = trackRef.current;
        if (!track) return;
        
        // 1. Punem pe pauză pentru a citi poziția exactă
        track.style.animationPlayState = 'paused';
        
        // 2. Citim poziția curentă
        const currentOffsetPx = getRunningTransformOffset(track);
        const totalTrackWidth = track.clientWidth / 2; 
        const offsetPercentage = Math.abs(currentOffsetPx) / totalTrackWidth;

        // 3. Calculăm delay-ul NEGATIV necesar pentru a relua animația rapidă
        const newDelay = parseFloat(initialSpeed) * offsetPercentage; 

        // 4. Oprim animația CSS existentă
        track.style.animation = 'none';
        
        // 5. Setăm poziția statică a track-ului pe baza ofsetului citit
        track.style.transform = `translateX(${currentOffsetPx}px)`;

        // 6. Forțăm un reflow
        void track.offsetHeight;

        // 7. Reaplicăm animația cu noua durată și delay (rapid)
        track.style.animation = `infinite-scroll ${initialSpeed} linear infinite`;
        track.style.animationDelay = `-${newDelay}s`;
        track.style.animationPlayState = 'running';
        
        if (containerRef.current) containerRef.current.style.cursor = 'default';
    };
    
    // --- Logica de Drag/Scroll manual cu Wrapping Infinit ---

    const getPositionX = (e) => e.touches ? e.touches[0].pageX : e.pageX;

    const handleStart = (e) => {
        const container = containerRef.current;
        if (!container || (e.touches && e.touches.length > 1)) return;

        isDragging.current = true;
        
        // 1. Oprim animația complet pentru control manual
        const track = trackRef.current;
        if (track) track.style.animationPlayState = 'paused';

        // 2. Calculăm poziția de start relativ la scroll
        startX.current = getPositionX(e) + container.scrollLeft;
        container.style.cursor = 'grabbing';
    };

    const handleEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        
        const container = containerRef.current;
        const track = trackRef.current;
        
        // Reluăm animația (viteza va fi cea setată de mouseEnter/mouseLeave)
        if (track) track.style.animationPlayState = 'running';
        
        if (container) container.style.cursor = 'grab';
    };

    const handleMove = (e) => {
        if (!isDragging.current) return;
        
        // Previne scroll-ul paginii la tragere
        e.preventDefault();
        
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;
        
        const currentX = getPositionX(e);
        const newScrollLeft = startX.current - currentX;
        
        container.scrollLeft = newScrollLeft;
        
        // --- Logica Wrapping Infinit Manual ---
        
        // Lățimea conținutului original (ex: 6 elemente)
        // Folosim scrollWidth / 2
        const singleContentWidth = track.scrollWidth / 2;
        
        // 1. Derulare la dreapta (am ajuns la capătul conținutului duplicat)
        if (container.scrollLeft >= singleContentWidth) {
            container.scrollLeft -= singleContentWidth;
            // Ajustăm startX pentru a compensa saltul
            startX.current -= singleContentWidth;
        }

        // 2. Derulare la stânga (am ajuns la începutul conținutului original)
        if (container.scrollLeft < 0) {
            container.scrollLeft += singleContentWidth;
            // Ajustăm startX pentru a compensa saltul
            startX.current += singleContentWidth;
        }
        
    };
    
    // Atașarea handlerilor pe container (se păstrează)
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        
        container.addEventListener('mousedown', handleStart);
        container.addEventListener('touchstart', handleStart, { passive: false });
        
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove, { passive: false });

        return () => {
            container.removeEventListener('mousedown', handleStart);
            container.removeEventListener('touchstart', handleStart);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchend', handleEnd);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);


    // Logica de click care simulează navigarea
    const handleCardClick = (item) => {
        // Înlocuiți această funcție cu logica reală de rutare (e.g., navigate(url))
        const url = `/instructor/${item.id}/${item.name.replace(/\s/g, '-')}`;
        console.log(`Navigare simulată către: ${url}`);
        alert(`Navigare simulată la pagina instructorului: ${item.name}. (În realitate, ați fi redirecționat)`);
    };

    return (
        <div 
            className="infinite-carousel-container" 
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className="infinite-carousel-track" 
                ref={trackRef} 
                style={{ animationDuration: initialSpeed }}
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