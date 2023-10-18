import React from 'react';
import './Projects.css';
import Images from '../media';


const Projects = () => {
    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='project-container'>
                <h2 className='project-heading'>JAAM Music</h2>
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
                <h2 className='project-heading'>Jabber</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Node/Express</div>
                        <div className='label'>JavaScript</div>
                    </div>
                    <p>Jabber is a social media website that closely resembles Facebook in terms of features and layout. Users can register and customize their profiles, create and edit posts, and engage with other users through likes and comments. The platform aims to offer a familiar and user-friendly experience to those who appreciate Facebook's functionalities but seek an alternative platform. Registered users will be automatically redirected to their news feed home page, thanks to their persistent user token.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://jabber.fly.dev/'>See Live</a>
                        <a className='label-end' href='https://github.com/jbourg4364/jabber'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.jabber} alt='' />
                </div>
            </div>
            <div className='project-container'>
                <h2 className='project-heading'>CarQ</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>React</div>
                        <div className='label'>Node/Express</div>
                        <div className='label'>JavaScript</div>
                    </div>
                    <p>CarQ makes carline pickup easier and more efficient than ever. Parents check in once they are in line to pick up their precious cargo, simultaneously administration has a special portal where the corresponding students appear in order in which their parents have checked in. Once picked up the students are checked off and added to a daily list that can be accessed forever with corresponding times of pickup.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://carq.fly.dev/'>See Live</a>
                        <a className='label-end' href='https://github.com/jbourg4364/journey'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.carQ} alt='' />
                </div>
            </div>
        </div>
    )
};

export default Projects;