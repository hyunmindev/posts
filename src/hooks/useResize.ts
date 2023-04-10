import { useEffect, useState } from 'react';

export const useResize = () => {
  const [size, setSize] = useState({ height: 0, width: 0 });

  const onResize = () =>
    setSize({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
};
