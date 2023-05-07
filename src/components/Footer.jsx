import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div id='Footer'>
            <div className='footer-container'>
                <div className='container'>
                    <span className='back-to-top'>
                        <a href='#top'><i id='footer-arrow'class="fa-solid fa-arrow-up fa-bounce"></i></a>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Footer;