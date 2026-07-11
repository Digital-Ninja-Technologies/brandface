import { useEffect, useRef, useState } from 'react';

function format(n, suffix) {
  const s = n >= 1000 && !suffix ? Math.round(n).toLocaleString('en-US') : Math.round(n).toString();
  return s + (suffix || '');
}

export default function Count({ value, suffix = '', as: Tag = 'span', style = {} }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(format(0, suffix));
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      if (started.current) return;
      started.current = true;
      const dur = 1500;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(value * eased, suffix));
        if (t < 1) requestAnimationFrame(step);
        else setDisplay(format(value, suffix));
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <Tag ref={ref} style={style}>
      {display}
    </Tag>
  );
}
