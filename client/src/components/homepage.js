import React from 'react';

import Hero from './hero';
import Content from './content';

const HomePage = () => {
    return (
        <div className='home-body'>
            <Hero />
            <Content />
        </div>
    )
}

export default HomePage;