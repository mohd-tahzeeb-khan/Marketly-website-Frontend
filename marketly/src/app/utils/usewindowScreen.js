// src/utils/useWindowSize.js
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Only execute this code in the browser
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set the initial size
    if (typeof window !== 'undefined') {
      handleResize(); // Call once to set initial values
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only run on mount

  return windowSize; // Return current window size
};

export default useWindowSize;
