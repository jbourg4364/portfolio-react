import React from 'react';
import './About.css';
import Images from '../media';

const About = () => {
    return (
        <>
        <div id="about">
            <h1 class="about-heading">ABOUT</h1>
            <img className='profile-image'
            src={Images.profile} alt='' />

            <p className='about-summary'>Enthusiastic Software Developer with a proven track record of successfully coding web applications from inception to completion, aligning with organizational objectives using best industry practices. Adept at leading high-performing teams to achieve project milestones within established timelines and budgets.</p>

            <a id="resume-button" href='https://drive.google.com/file/d/10oH9jX1nL044dqUR36ra9WD4vMIMcHce/view?usp=drive_link'>Resume</a>
        </div>
        </>
        
    );
};

export default About;