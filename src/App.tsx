import React from 'react';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
  </div>
  );
};

export default App;
