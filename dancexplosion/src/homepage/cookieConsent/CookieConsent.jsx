import React, { useState } from 'react';
import './CookieConsent.css';

/**
 * Componentă pentru afișarea banner-ului de acceptare a cookie-urilor.
 * Starea este gestionată prin localStorage pentru a persista acceptul utilizatorului.
 */
function CookieConsent() {
    // Verifică starea cookie-urilor.
    const [isVisible, setIsVisible] = useState(localStorage.getItem('cookiesAccepted') !== 'true');

    const handleAccept = () => {
        // Setează starea ca acceptată pentru a nu mai afișa bannerul
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };
    
    // Nu afișează nimic dacă a fost deja acceptat
    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p>
                Acest site folosește cookie-uri pentru a îmbunătăți experiența ta.
                Prin continuarea navigării, ești de acord cu utilizarea lor.
            </p>
            <button onClick={handleAccept} className="cta-accept-cookie">
                Accept
            </button>
        </div>
    );
}

export default CookieConsent;