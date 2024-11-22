import { useEffect } from 'react';

export const useNativeBehavior = () => {
  useEffect(() => {
    const handleGesture = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleGesture, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleGesture);
    };
  }, []);
}; 