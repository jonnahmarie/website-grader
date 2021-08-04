import React from 'react';
import './App.css';

// CSS
import './App.css';

// Components
import Layout from './components/layout';
import SpeedComponent from './components/speedComponent';
import AboutSpeed from './components/aboutSpeed';
import Form from './components/requestForm';

const App = () => {
    return (
        <div>
            <Layout />
            <SpeedComponent />
            <AboutSpeed />
            <Form />
        </div>
    );
};

export default App;
