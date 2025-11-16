import React, { useState } from 'react';
import './RobotCheck.css';

/**
 * Componentă simplă de verificare anti-robot (CAPTCHA)
 */
function RobotCheck({ onVerified }) {
    const correctAnswer = 7;
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (parseInt(answer) === correctAnswer) {
            // Verificare reușită: setează starea în localStorage și în aplicație
            localStorage.setItem('isRobotVerified', 'true');
            onVerified(true);
        } else {
            setError('Răspuns incorect. Mai încearcă.');
        }
    };

    return (
        <div className="robot-check-overlay">
            <div className="robot-check-box">
                <h2>Verificare Rapidă</h2>
                <p>Pentru a ne asigura că ești om, te rugăm să răspunzi:</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="captcha">Cât fac 3 + 4 ?</label>
                    <input 
                        id="captcha"
                        type="number" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)} 
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="cta-verify-robot">Confirmă</button>
                </form>
            </div>
        </div>
    );
}

export default RobotCheck;