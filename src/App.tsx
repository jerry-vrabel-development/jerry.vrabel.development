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
          <a href="#home"> {/* Link to Home component */}
            <Home />
          </a>
          <a href="#about"> {/* Link to About component */}
            <About />
          </a>
          <a href="#services"> {/* Link to Services component */}
            <Services />
          </a>
          <a href="#portfolio"> {/* Link to Portfolio component */}
            <Portfolio />
          </a>
          <a href="#contact"> {/* Link to Contact component */}
            <Contact />
          </a>
  </div>
  );
};

export default App;
