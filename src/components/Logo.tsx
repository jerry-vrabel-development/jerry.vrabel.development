// Logo.tsx
import React, { useState, useEffect } from 'react';

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  const [isFadingIn, setIsFadingIn] = useState(true);
  const [isColorChanging, setIsColorChanging] = useState(false);

  useEffect(() => {
    if (isFadingIn) {
      const timeoutId = setTimeout(() => {
        setIsFadingIn(false);
        setIsColorChanging(true);
      }, 1000); // Adjust the duration of the fade-in animation here

      return () => clearTimeout(timeoutId);
    }
  }, [isFadingIn]);

  return (
    <div className={`logo-container ${isColorChanging ? 'color-change' : ''}`}>
      <img
        src={src}
        alt="Bash Logo"
      />
    </div>
  );
};

export default Logo;
