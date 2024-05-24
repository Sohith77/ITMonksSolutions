import React, { useState, useEffect } from 'react';
import './focusServices.css';

const PercentageBar = ({ percentage }) => {
    const [showBar, setShowBar] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

    // Show the bar with animation when component mounts
    useEffect(() => {
        setShowBar(true);
    }, []);

    // Enable transition when percentage changes due to button click
    useEffect(() => {
        setIsTransitionEnabled(true);
        const timeoutId = setTimeout(() => {
            setIsTransitionEnabled(false);
        }, 1000); // Disable transition after 1 second (adjust as needed)
        return () => clearTimeout(timeoutId);
    }, [percentage]); // Trigger effect when percentage changes

    return (
        <div className="percentageBarContainer">
            {showBar && (
                <div
                    className="percentageBar3131"
                    style={{
                        width: `${percentage}%`,
                        transition: isTransitionEnabled ? 'width 1s ease' : 'none'
                    }}
                ></div>
            )}
        </div>
    );
};

export default PercentageBar;
