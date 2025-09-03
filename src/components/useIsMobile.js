// hooks/useIsMobile.js

'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the viewport is mobile-sized.
 * @param {number} breakpoint - The max-width in pixels to be considered mobile. Defaults to 768px.
 * @returns {boolean} - True if the window width is less than the breakpoint.
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for window object to ensure it's running on the client-side
    if (typeof window === 'undefined') {
      return;
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check on component mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};