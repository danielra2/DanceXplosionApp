import React, { useState } from 'react';
import './FormularInscriere.css';

function FormularInscriere({ isVisible, onClose }) {
    if (!isVisible) return null;

    const [formData, setFormData] = useState({
        nume: '',
        prenume: '',
        email: '',
        telefon: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Date trimise:", formData);
        alert("Înscrierea a fost trimisă cu succes! Vă vom contacta în curând.");

        onClose();
        
        setFormData({ nume: '', prenume: '', email: '', telefon: '' });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="formular-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="close-btn" onClick={onClose}>&times;</button>
                
                <h2 className="modal-title">Rezervă Clasa Ta de Probă</h2>
                <p className="modal-subtitle">Completează detaliile de contact. Te sunăm în maxim 24 de ore!</p>

                <form onSubmit={handleSubmit} className="trial-form">
                    
                    <div className="form-group">
                        <label htmlFor="nume">Nume</label>
                        <input type="text" id="nume" name="nume" value={formData.nume} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="prenume">Prenume</label>
                        <input type="text" id="prenume" name="prenume" value={formData.prenume} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="telefon">Telefon</label>
                        <input type="tel" id="telefon" name="telefon" value={formData.telefon} onChange={handleChange} required />
                    </div>
                    
                    <button type="submit" className="cta-modal-submit">Înscriere Gratuită</button>
                </form>
            </div>
        </div>
    );
}

export default FormularInscriere;