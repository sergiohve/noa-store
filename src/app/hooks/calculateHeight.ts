import { useState, useEffect } from 'react';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollTop(newScrollTop);
     
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollTop;
};

export default useScrollTop;