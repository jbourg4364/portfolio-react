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

            <p className='about-summary'>Software developer with extensive experience in leading all facets of program management, from inception through successful completion, to attain organizational goals and milestones. Well-versed in directing top-performing teams to accomplish project objectives within defined time and budget.</p>

            <a id="resume-button" href='https://drive.google.com/file/d/10zcNjKXyAQQNK5XTqqshT5FDc24pDs1F/view?usp=share_link'>Resume</a>
        </div>
        </>
        
    );
};

export default About;