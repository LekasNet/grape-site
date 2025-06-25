import React from 'react';
import './GrainOverlayWrapper.css';

const GrainOverlayWrapper = ({ children }) => {
    return (
        <div className="grain-wrapper">
            {children}
            <div className="grain-overlay" />
        </div>
    );
};

export default GrainOverlayWrapper;
