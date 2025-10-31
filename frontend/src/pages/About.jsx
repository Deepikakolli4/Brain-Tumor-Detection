import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    const handleCheckNow = () => {
        navigate('/'); 
    };

    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Brain Tumor Detection</h1>
            </header>

            <div className="about-content">
                <p>
                    Our goal is to provide an efficient and accurate system for detecting brain tumors
                    using advanced machine learning techniques. This project leverages cutting-edge
                    technology to assist medical professionals in diagnosing brain tumors with greater
                    precision and speed.
                </p>

                <button className="check-now-btn" onClick={handleCheckNow}>
                    Check Now
                </button>
            </div>

            <footer className="about-footer">
                <p>&copy; 2025 Brain Tumor Detection. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;
