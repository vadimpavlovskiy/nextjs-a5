import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const resize = function handleResize() {
        return setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }
  }, [hasWindow]);

  return windowDimensions;
}