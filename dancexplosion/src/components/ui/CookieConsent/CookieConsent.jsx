import React, { useState } from 'react';
import './CookieConsent.css';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(localStorage.getItem('cookiesAccepted') !== 'true');

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };
    
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