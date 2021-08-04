import React from 'react';
import './App.css';

// CSS
import './App.css';

// Components
import Header from './components/layout/header';
import HomePage from './components/homepage';
import Footer from './components/layout/footer';

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
