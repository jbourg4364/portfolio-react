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
                    <p>Take a trip to the moon with this interactive version of the classic game of Tic-Tac-Toe. The game randomly chooses the first player and determines a winner accordingly. With a reset of the state board, the players never have to refresh the page.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://exquisite-pony-390f59.netlify.app/'>See Live</a>
                        <a className='label-end' href='https://github.com/jbourg4364/tic-tac-toe/'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.galaxy} alt='' />
                </div>
            </div>
            

        </div>
    )
};

export default Projects;