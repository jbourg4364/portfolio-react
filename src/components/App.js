import React, { useState } from 'react';
import { Header, Welcome, Skills, Projects, About, Contact } from './';
import './App.css';

const App = () => {

    return (
        <>
        <div>
            <Header />
            <Welcome />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </div>
        </>
        
    )
};

export default App;