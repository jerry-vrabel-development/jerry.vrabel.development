import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {

  return (
    <div>
    <Router basename="/jerry.vrabel.development/">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <About />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Services />
            </motion.div>
          } />
          <Route path="/portfolio" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Portfolio />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Contact />
            </motion.div>
          } />
          </Routes>
      </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
