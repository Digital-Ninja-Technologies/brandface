import Reveal from './Reveal.jsx';

export default function Problem() {
  return (
    <section className="bf-section">
      <div className="bf-container-narrow">
        <Reveal className="bf-eyebrow">Why lawyers keep getting burned</Reveal>
        <Reveal as="h2" delay={80} className="bf-h2-lg">
          Most agencies work with anyone. A coffee shop this week, a roofer next week, a law firm the week after.
        </Reveal>
        <Reveal as="p" delay={140} className="bf-p-lead">
          They never learn how a specific business actually grows, which is exactly why firms keep getting burned.
          We do one thing: we grow law firms. We know how a firm signs cases, where the money leaks in a practice,
          and what actually drives case volume, because we spend every day in that world.
        </Reveal>
      </div>
    </section>
  );
}
