import React from 'react';
import './Projects.css';
import Images from '../media';


const Projects = () => {
    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='project-container'>
                <h2>JAAM Music</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Node/Express</div>
                        <div className='label'>JavaScript</div>
                    </div>
                    <p className='collaborators'>Collaborators: Aparna Priyavadan, Maisha Khan, Aubrey Little</p>
                    <p>An e-commerce website that offers a seamless browsing and purchasing experience for users, with or without an account. Working collaboratively with a team of developers, we utilized cutting-edge technologies including React, Node.js, Express, RESTful API, and PostgreSQL to build the site's robust architecture. I specifically focused on implementing key features such as user account management, secure transactions, and a streamlined checkout process. Additionally, I successfully implemented an administrator role that grants special privileges, enabling them to create new items and edit essential store details.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://jaam.fly.dev/'>See Live</a>
                        <a className='label-end' href='https://github.com/gracehopper-jaam/graceshopper-jaam'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.JAAM} alt='' />
                </div>
            </div>
            <div className='project-container'>
                <h2>Slim GEMS</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Node/Express</div>
                        <div className='label'>JavaScript</div>
                    </div>
                    <p className='collaborators'>Collaborators: Dustin Le</p>
                    <p>A web application that allows users to register, log in, and create fitness routines and activities. As a user, you can create new routines, update and delete existing ones, and add activities with dropdown menus and inputs. The activities tab shows a list of all created activities and allows registered users to edit them. The stretch goals include features such as clicking on a username to see their public routines or on an activity name to see all public routines that feature it.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://slimgems.fly.dev/'>See Live</a>
                        <a className='label-end' href='https://github.com/Jason-Dustin-fit/fit-trackr'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.slimGEMS} alt='' />
                </div>
            </div>
        </div>
    )
};

export default Projects;