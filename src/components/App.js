import React, { useState } from 'react';
import { Header, Welcome, Skills, Projects, About, Contact } from './';


const App = () => {

    return (
        <>
        <div>
            <view style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Header />
                <Welcome />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </view>
        </div>
        </>
        
    )
};

export default App;