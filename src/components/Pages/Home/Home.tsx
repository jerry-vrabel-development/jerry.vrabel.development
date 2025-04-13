import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import Logo from '../../Logo/Logo';
import "./Home.css";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
 
  useEffect(() => {
    // Set initial styles via class
    if (titleRef.current) titleRef.current.className = 'title';
    if (subtitleRef.current) subtitleRef.current.className = 'subtitle';
    if (logoRef.current) logoRef.current.className = 'logo-container';
    
    // Initial background effect
    animate('.home', {
      backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.03)'],
      duration: 2000,
      easing: 'easeOutQuad'
    });
    
    // Animate logo with bounce effect
    animate('.logo-container', {
      scale: [0, 1.2, 1],
      opacity: [0, 1],
      rotate: [45, 0],
      duration: 1500,
      easing: 'spring(1, 80, 10, 0)',
      delay: 200
    });
    
    // Create staggered animation for title letters
    if (titleRef.current && letterRefs.current.length > 0) {
      animate(letterRefs.current, {
        translateY: [-50, 0],
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 1200,
        delay: stagger(50),
        easing: 'easeOutExpo'
      });
    }
    
    // Subtitle animation with glow effect
    animate('.subtitle', {
      translateY: [-15, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'out(2)',
      delay: 1200,
      complete: () => {
        // Add a subtle highlight animation after subtitle appears
        animate('.subtitle', {
          textShadow: [
            '0 0 0 rgba(255,255,255,0)',
            '0 0 10px rgba(255,255,255,0.8)',
            '0 0 0 rgba(255,255,255,0)'
          ],
          duration: 2000,
          easing: 'easeInOutSine'
        });
      }
    });
    
    // Add floating animation to logo after it appears
    setTimeout(() => {
      animate('.logo-container', {
        translateY: [0, -10, 0],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    }, 2000);
    
    // Add a subtle pulse animation to the entire container
    animate('.home', {
      scale: [1, 1.01, 1],
      duration: 8000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
    
  }, []);
  
  // Function to split text into letters for individual animation
  const splitTextIntoSpans = (text: string) => {
    return text.split('').map((char, index) => (
      <span 
        key={index}
        ref={(el) => { letterRefs.current[index] = el; }}
        style={{ display: 'inline-block', opacity: 0 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };
 
  return (
    <div className='home' id="home" ref={containerRef}>
      <h1 ref={titleRef}>
        {splitTextIntoSpans('Jerry Vrabel Development')}
      </h1>
      <p ref={subtitleRef}>Web Application Development</p>
      <div ref={logoRef}>
        <Logo />
      </div>
    </div>
  );
};

export default Home;
