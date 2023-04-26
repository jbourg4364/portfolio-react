import React from 'react';
import './Projects.css';
import Images from '../media';


const Projects = () => {
    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='project-container'>
                <h2>Galaxy Tic-Tac-Toe</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>JavaScript</div>
                        <div className='label'>HTML5</div>
                        <div className='label'>CSS</div>    
                    </div>
                    <p>An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.</p>
                    <div className='label-container'>
                        <button className='label-end'><a className='label-end' href='https://exquisite-pony-390f59.netlify.app/'>See Live</a></button>
                        <button className='label-end'><a className='label-end' href='https://exquisite-pony-390f59.netlify.app/'>Source Code</a></button>
                    </div>
                    <img className='project-image' src={Images.galaxy} alt='' />
                </div>
            </div>
            

        </div>
    )
};

export default Projects;