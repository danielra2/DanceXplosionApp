import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ isVisible, onClose }) {
    if (!isVisible) return null;

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulare logică de autentificare (în aplicații reale, ar fi un apel API)
        console.log("Tentativă de autentificare:", formData);
        alert(`Autentificare încercată pentru: ${formData.email}. (Funcționalitatea de backend lipsește)`);

        // Închide modalul după trimitere
        onClose();
        
        // Resetare formular
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="modal-overlay-login" onClick={onClose}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="close-btn-login" onClick={onClose}>&times;</button>
                
                <h2 className="modal-title-login">Autentificare Membri</h2>
                <p className="modal-subtitle-login">Vă rugăm să introduceți datele de acces.</p>

                <form onSubmit={handleSubmit} className="login-form">
                    
                    <div className="form-group-login">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group-login">
                        <label htmlFor="password">Parolă</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    
                    <button type="submit" className="cta-login-submit">LOG IN</button>
                    
                    <a href="#" className="forgot-password-link">Ai uitat parola?</a>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;