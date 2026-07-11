import Reveal from './Reveal.jsx';
import Count from './Count.jsx';

export default function TrackRecord() {
  return (
    <section id="results" className="bf-section bf-trackrecord">
      <div className="bf-trackrecord-glow" />
      <div className="bf-container bf-center" style={{ position: 'relative' }}>
        <Reveal className="bf-eyebrow">The track record</Reveal>
        <Reveal as="h2" delay={80} className="bf-trackrecord-num">
          <Count value={400} suffix="M+" />
        </Reveal>
        <Reveal as="p" delay={140} className="lede">
          Views across every brand BrandFace Media has produced content for.
        </Reveal>
        <Reveal as="p" delay={200} className="body">
          We've worked across personal injury law, real estate, medical practices, moving companies, urgent care,
          restaurants, and Shark Tank alumni brands. The lawyer vertical is where we've had the most breakout
          success, which is why it's our focus.
        </Reveal>
      </div>
    </section>
  );
}
