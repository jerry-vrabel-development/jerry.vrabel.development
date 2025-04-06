// Logo.tsx
import React, { useState, useEffect } from 'react';
import "./Logo.css"

const bashLogoUrl = './250-bash.svg'

const Logo: React.FC = () => {
  const [isFadingIn, setIsFadingIn] = useState(true);
  const [isColorChanging, setIsColorChanging] = useState(false);

  useEffect(() => {
    if (isFadingIn) {
      const timeoutId = setTimeout(() => {
        setIsFadingIn(false);
        setIsColorChanging(true);
      }, 500); // Adjust the duration of the fade-in animation here

      return () => clearTimeout(timeoutId);
    }
  }, [isFadingIn]);

  return (
    <div className={`logo-container ${isColorChanging ? 'color-change' : ''}`}>
      <img
        src={bashLogoUrl}
        alt="Bash Logo"
      />
    </div>
  );
};

export default Logo;
