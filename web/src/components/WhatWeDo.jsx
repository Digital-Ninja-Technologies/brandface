import Reveal from './Reveal.jsx';

export default function WhatWeDo() {
  return (
    <section id="work" className="bf-section-tight bf-section-alt">
      <div className="bf-container">
        <div className="bf-wwd-head">
          <Reveal className="bf-eyebrow bf-section-tight-inner">What we handle</Reveal>
          <Reveal as="h2" delay={80}>
            Three systems. One engine.
          </Reveal>
          <Reveal as="p" delay={140}>
            Nothing about it lands on your plate except showing up to the shoot. We connect content, ads, and
            back-end operations into a single machine, which is what actually moves case volume.
          </Reveal>
        </div>

        <div className="bf-grid-3" style={{ marginTop: 48 }}>
          <Reveal className="bf-card">
            <div className="bf-card-num">01</div>
            <h3>Content, done for you</h3>
            <p>
              Fifteen pieces of short-form video every month: scripted, filmed, edited, and published across every
              relevant platform. We make content that actually gets watched, because our founder spent years doing
              exactly that.
            </p>
          </Reveal>
          <Reveal delay={100} className="bf-card">
            <div className="bf-card-num">02</div>
            <h3>Paid ads that convert</h3>
            <p>
              Managed lead campaigns built on creative that converts, with funnels engineered around your real case
              criteria. We start spend small, around $1,000/mo, to prove cost-per-case before we scale it.
            </p>
          </Reveal>
          <Reveal delay={200} className="bf-card bf-card-highlight">
            <div className="bf-pill-gold">Almost nobody does this</div>
            <div className="bf-card-num">03</div>
            <h3>Automation &amp; speed-to-lead</h3>
            <p>
              Speed-to-lead systems so no lead goes cold, nurture sequences so nothing slips through the cracks, and
              intake workflows that chase down no-shows, giving your team their time back.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
