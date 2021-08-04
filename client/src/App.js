import React from 'react';

// CSS
import './App.css';

// Components
import Header from './components/layout/header';
import HomePage from './components/homepage';
import Footer from './components/layout/footer';

console.log(`.env test key: ${process.env.REACT_APP_MAILGUN_API_KEY}`);

const App = () => {
    return (
        <div>
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
};

export default App;
