import React from 'react';
import './WorkInProgress.css';

function WorkInProgress({ isVisible, onClose, onContact }) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay-wip" onClick={onClose}>
            <div className="wip-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn-wip" onClick={onClose}>&times;</button>
                <h2 className="modal-title-wip">Coming Soon</h2>
                <p className="modal-subtitle-wip">
                    Sorry, we're working on this! Contact us here for more details.
                </p>
                <div className="wip-cta-container">
                    <button className="cta-wip-contact" onClick={onContact}>
                        Contact us on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WorkInProgress;