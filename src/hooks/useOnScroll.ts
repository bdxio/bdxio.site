import React, { useEffect, useState } from 'react';

const useOnScroll = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);
  // Set up
  useEffect(() => {
    const onScroll = () => {
      const onTop = window.scrollY < 50;
      setIsOnTop(onTop);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return { isOnTop };
};

export default useOnScroll;
