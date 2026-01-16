import React from 'react';
import './Footer.css';

function Footer() {
    // Adresa exactă pentru Google Maps
    const addressQuery = "Bulevardul Victoriei nr 42, Sibiu";
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;

    return (
        <footer className="site-footer">
            <div className="footer-content">
                
                {/* Secțiunea Brand / Logo (Opțional) */}
                <div className="footer-section brand-section">
                    <h2 className="footer-logo">DANCE XPLOSION</h2>
                    <p className="footer-tagline">Academia ta de dans din Sibiu.</p>
                </div>

                {/* Secțiunea Contact */}
                <div className="footer-section contact-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    
                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <a href="tel:+40751327415" className="footer-link">
                            0751 327 415
                        </a>
                    </div>

                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <a 
                            href={mapLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-link address-link"
                        >
                            Bulevardul Victoriei nr. 42,<br />
                            Sibiu, România
                        </a>
                    </div>
                </div>

                {/* Secțiunea Social Media (Opțional - poți șterge dacă nu dorești) */}
                <div className="footer-section social-section">
                    <h3 className="footer-heading">Urmărește-ne</h3>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dance Xplosion Academy. Toate drepturile rezervate.</p>
            </div>
        </footer>
    );
}

export default Footer;