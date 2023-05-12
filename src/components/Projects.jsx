import React from 'react';
import './Projects.css';
import Images from '../media';


const Projects = () => {
    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='project-container'>
                <h2>Slim GEMS</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Node/Express</div>
                        <div className='label'>JavaScript</div>
                    </div>
                    <p>A web application that allows users to register, log in, and create fitness routines and activities. As a user, you can create new routines, update and delete existing ones, and add activities with dropdown menus and inputs. The activities tab shows a list of all created activities and allows registered users to edit them. The stretch goals include features such as clicking on a username to see their public routines or on an activity name to see all public routines that feature it.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://gorgeous-brioche-1bc110.netlify.app/'>See Live</a>
                        <a className='label-end' href='https://github.com/Jason-Dustin-fit/fit-trackr'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.slimGEMS} alt='' />
                </div>
            </div>
            <div className='project-container'>
                <h2>Stranger's Things</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>JavaScript</div>
                        <div className='label'>HTML5</div>
                        <div className='label'>CSS</div>    
                    </div>
                    <p>Stranger's Things is a platform where users can post and browse classified ads for various items and services. With its user-friendly interface and search features, finding what you need on Stranger's Things is easy and efficient.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://gorgeous-brioche-1bc110.netlify.app/'>See Live</a>
                        <a className='label-end' href='https://github.com/jbourg4364/strangers-things'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.strangersThings} alt='' />
                </div>
            </div>
           
            {/* <div className='project-container'>
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
            </div> */}
            

        </div>
    )
};

export default Projects;