import React from 'react';

import Hero from './hero';
import SpeedComponent from './speedComponent';
import AboutSpeed from './aboutSpeed';
import Form from './requestForm';

const HomePage = () => {
    return (
        <div className='home-body'>
            <Hero />
            <SpeedComponent />
            <AboutSpeed />
            <Form />
        </div>
    )
}

export default HomePage;