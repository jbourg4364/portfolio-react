import React from 'react';
import './Skills.css';
import Images from '../media';



const Skills = () => {
    return (
        <>
        <div id='skills'>
            <h2 className='skills-heading'>SKILLS</h2>
            <h2 className='skills-container-heading'>Front End</h2>
            <div className='skills-container'>
                <div className='skill'>
                    <img src={Images.jsLogo} alt='' />
                    <caption>JavaScript</caption>
                </div>
                <div className='skill'>
                    <img src={Images.reactLogo} alt='' />
                    <caption>React</caption>
                </div>
                <div className='skill'>
                    <img src={Images.htmlLogo} alt='' />
                    <caption>HTML5</caption>
                </div>
                <div className='skill'>
                    <img src={Images.cssLogo} alt='' />
                    <caption>CSS</caption>
                </div>
                {/* <div className='skill'>
                    <img src={Images.cSharp} alt='' />
                    <caption>C#</caption>
                </div> */}
            </div>
            <h2 className='backendskills-container-heading'>Back End</h2>
            <div className='backend-skills-container'>
                <div className='skill'>
                    <img src={Images.nodeLogo} alt='' />
                    <caption>Node</caption>
                </div>
                <div className='skill'>
                    <img src={Images.expressLogo} alt='' />
                    <caption>Express</caption>
                </div>
                <div className='skill'>
                    <img src={Images.PostgreSQL} alt='' />
                    <caption>PostgreSQL</caption>
                </div>
                <div className='skill'>
                    <img src={Images.API} alt='' />
                    <caption>RESTful API</caption>
                </div>
            </div>

            <h2 className='backendskills-container-heading'>Tools</h2>
            <div className='backend-skills-container'>
                <div className='skill'>
                    <img src={Images.gitLogo} alt='' />
                    <caption>Git</caption>
                </div>
            </div>
        </div>
        </>
        
    )
};

export default Skills;