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

            <p className='about-summary'>Full Stack Software Developer with a demonstrated history of successfully conceiving and executing web applications, aligning them with organizational objectives through industry best practices. Proficient in guiding high-performing teams to achieve project milestones within established timelines and budgets.</p>

            <a id="resume-button" href='https://drive.google.com/file/d/1dk1SnPNwRmsTvYp5eioziB7R4gk--lIJ/view?usp=sharing'>Resume</a>
        </div>
        </>
        
    );
};

export default About;