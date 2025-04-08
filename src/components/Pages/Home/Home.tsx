import React from 'react';
import Logo from '../../Logo/Logo';
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className='home' id="home">
      <h1>Jerry Vrabel Development</h1>
      <p>Web Application Development</p>
      <Logo />
    </div>
  );
};

export default Home;
