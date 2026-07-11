import { useEffect, useState } from 'react';

export default function useScrollY() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.pageYOffset || document.documentElement.scrollTop);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return y;
}
