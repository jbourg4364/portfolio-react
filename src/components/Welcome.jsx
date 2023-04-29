import React from 'react';
import './Welcome.css';
import { Transition } from 'react-transition-group';

const Welcome = () => {
    return (
        <div id="welcome-banner">
            <h1>Hi, I'm <span>Jason.</span></h1>
            <h1>I'm a full stack developer.</h1>
            <nav>
                <ul>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </ul>
            </nav>
        </div>
    )
};

export default Welcome;