import React from 'react';
import './Skills.css';
import Images from '../media';


const Skills = () => {
    return (
        <div id='skills'>
            <div className="skills-heading">
                <h1 className='section-heading'>SKILLS</h1>
                <h2>Front End</h2>
                <div className='skills-container'>
                    <div className='ind-skill'>
                        <img src={Images.jsLogo} alt='' />
                        <caption>JavaScript</caption>
                    </div>
                    <div className='ind-skill'>
                        <img src={Images.reactLogo} alt='' />
                        <caption>React</caption>
                    </div>
                    <div className='ind-skill'>
                        <img src={Images.htmlLogo} alt='' />
                        <caption>HTML5</caption>
                    </div>
                    <div className='ind-skill'>
                        <img src={Images.cssLogo} alt='' />
                        <caption>CSS3</caption>
                    </div>
                </div>

                <h2 className='backend-heading'>Back End</h2>
                <div className='backend-container'>
                    <div className='ind-skill'>
                        <img src={Images.expressLogo} alt='' />
                        <caption>Express</caption>
                    </div>
                    <div className='ind-skill'>
                        <img src={Images.nodeLogo} alt='' />
                        <caption>Node</caption>
                        <img src={Images.gitLogo} alt='' />
                        <caption>Git</caption>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;