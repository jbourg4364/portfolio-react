import React, { useState } from 'react';
import { Header, Welcome, Skills, Projects, About, Contact, Footer } from './';
import './App.css';
import Reveal from 'react-reveal/Reveal';


const App = () => {


    
    return (
        <>
            <div id='top'>
                <Header /> 
                <Reveal>
                    
                    <Welcome /> 
                    <Skills />
                    <Projects />
                    <About />
                    <Contact />
                    <Footer />

                </Reveal>
            </div>
        </>
        
    )
};

export default App;