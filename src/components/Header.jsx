import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="social-links">
            <a href="https://www.linkedin.com/in/jason-bourg-729231117/" rel="noopener noreferrer" target="_blank" aria-label="linkedin">
                <i className="fa-brands fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://github.com/jbourg4364" rel="noopener noreferrer" target="_blank" aria-label="github">
                <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href="https://drive.google.com/file/d/10oH9jX1nL044dqUR36ra9WD4vMIMcHce/view?usp=drive_link" target="_blank" aria-label="resume">
                <i className="fa-solid fa-file fa-lg"></i>
            </a>
        </div>
    )
};

export default Header;