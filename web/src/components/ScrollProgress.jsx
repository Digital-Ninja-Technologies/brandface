import useScrollY from '../hooks/useScrollY';

export default function ScrollProgress() {
  const y = useScrollY();
  const h = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 0;
  const pct = h > 0 ? Math.min(100, (y / h) * 100) : 0;

  return (
    <div className="bf-progress-track">
      <div className="bf-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
