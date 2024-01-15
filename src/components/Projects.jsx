import React from 'react';
import './Projects.css';
import Images from '../media';


const Projects = () => {
    return (
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='project-container'>
                <h2 className='project-heading'>Claitor's Law Books and Publishing Division</h2>
                <div className='image-container'>
                    <div className='label-container'>
                        <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Express</div>
                        <div className='label'>Node</div>
                        <div className='label'>JavaScript</div>
                        <div className='label'>Multer</div>
                    </div>
                    <p>Designed and developed an e-commerce application, which includes an administrative portal for full control over the products and content of the site. The project utilizes PostgreSQL for effective database management, Express for extensive API routing, Multer for seamless image uploading and file management, and React for frontend development. The redevelopment process for the company's site included successfully transferring a substantial database containing approximately 47,000 books, each with 37 fields.</p>
                    <div className='label-container'>
                        <a className='label-end' href='https://claitors.com'>See Live</a>
                        <a className='label-end' href='https://github.com/jbourg4364/claitors'>Source Code</a>
                    </div>
                    <img className='project-image' src={Images.claitors} alt='' />
                </div>
            </div>
            <div className='project-container'>
                <h2 className='project-heading'>Jabber</h2>
                <div className='image-container'>
                    <div className='label-container'>
                    <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Express</div>
                        <div className='label'>Node</div>
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
                    <div className='label'>React</div>
                        <div className='label'>PostgreSQL</div>
                        <div className='label'>Express</div>
                        <div className='label'>Node</div>
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