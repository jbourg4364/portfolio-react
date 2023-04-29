import React, { useState } from 'react';
import { Header, Welcome, Skills, Projects, About, Contact } from './';
import './App.css';
import Reveal from 'react-reveal/Reveal';


const App = () => {


    
    return (
        <>
            <div>
                <Header /> 
                <Reveal>
                    
                    <Welcome /> 
                    <Skills />
                    <Projects />
                    <About />
                    <Contact />

                </Reveal>
            </div>
        </>
        
    )
};

export default App;