import Reveal from './Reveal.jsx';
import Count from './Count.jsx';

const STATS = [
  { value: 400, suffix: 'M+', label: 'Views produced' },
  { value: 7, suffix: 'M+', label: 'Views for one attorney' },
  { value: 30, suffix: 'K+', label: 'New followers, one brand' },
  { value: 1, suffix: '', label: 'Signed case to break even' },
];

export default function StatBar() {
  return (
    <section className="bf-statbar-outer">
      <div className="bf-container">
        <div className="bf-statbar">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bf-statbar-cell">
              <div className="bf-statbar-num">
                <Count value={s.value} suffix={s.suffix} />
              </div>
              <div className="bf-statbar-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
