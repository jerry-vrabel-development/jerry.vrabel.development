// Logo.tsx
import React, { useState, useEffect } from 'react';
import './Logo.css';

interface LogoProps {
  animationStyle?: 'fadeIn' | 'pulse' | 'bounce' | 'rotate' | 'zoom';
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LOGO_PATH = '/jerry.vrabel.development/250-bash.svg';
const ANIMATION_DURATION = 1000; // ms

/**
 * Logo component with configurable size, animation and color effects
 */
const Logo: React.FC<LogoProps> = ({
  animationStyle = 'fadeIn',
  size = 'medium',
  color = '#f84d0f'
}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isColorChanging, setIsColorChanging] = useState(false);

  // Handle animation state changes
  useEffect(() => {
    if (!isAnimating) return;
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setIsColorChanging(true);
    }, ANIMATION_DURATION);
    
    return () => clearTimeout(timer);
  }, [isAnimating]);

  // Create container class names
  const containerClasses = [
    'logo-container',
    size,
    isAnimating ? animationStyle : '',
    isColorChanging ? 'color-change' : ''
  ].filter(Boolean).join(' ');

  // Set custom CSS variables
  const containerStyle = {
    '--highlight-color': color
  } as React.CSSProperties;

  return (
    <div 
      className={containerClasses}
      style={containerStyle}
      onClick={() => setIsAnimating(true)}
      role="button"
      aria-label="Replay logo animation"
    >
      <img
        src={LOGO_PATH}
        alt="Bash Logo"
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
