import React, { useRef } from 'react';
import Logo from '../../Logo/Logo';
import "./Home.css";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoGlowRef = useRef<HTMLDivElement>(null);
   
  return (
    <div className='home' id="home" ref={containerRef}>
      <div className="text-content">
        <h1 ref={titleRef} className="title">Jerry Vrabel Development</h1>
        <p ref={subtitleRef} className="subtitle">Web Application Development</p>
      </div>
      <div className="logo-wrapper">
        <div ref={logoGlowRef} className="logo-glow"></div>
        <div ref={logoRef} className="logo-container">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Home;
